#!/usr/bin/env bash
set -euo pipefail

# ================= CONFIG =================
read -p "Enter your Athena username: " ATHENA_USER
ATHENA_HOST="athena.dialup.mit.edu"
REMOTE="${ATHENA_USER}@${ATHENA_HOST}"

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
BUILD_CMD="npm run build"
BUILD_DIR="${PROJECT_DIR}/dist"

REMOTE_STAGING="~/www/dist"
DEST_DIR="/mit/mitmsa"
SITE_URL="https://msa.mit.edu"

SOCK="/tmp/ssh-msa-deploy-%r@%h:%p"
SSH_OPTS="-o ControlMaster=auto -o ControlPath=${SOCK} -o ControlPersist=60"
# ==========================================

remote_cmd() {
  ssh ${SSH_OPTS} "${REMOTE}" "$@"
}

cleanup() {
  echo ""
  echo "==> Closing SSH connection..."
  ssh -o ControlPath="${SOCK}" -O exit "${REMOTE}" 2>/dev/null || true
}
trap cleanup EXIT

echo "==> [LOCAL] Building site..."
cd "${PROJECT_DIR}"
${BUILD_CMD}

if [[ ! -d "${BUILD_DIR}" ]]; then
  echo "ERROR: Build directory not found: ${BUILD_DIR}"
  exit 1
fi
echo "    Build output ready at ${BUILD_DIR}"

echo ""
echo "==> [SSH] Opening connection to Athena (you will authenticate once)..."
ssh ${SSH_OPTS} -fN "${REMOTE}"
echo "    Connected."

echo ""
echo "==> [ATHENA] Cleaning old staging files..."
remote_cmd "rm -rf ${REMOTE_STAGING}"
echo "    Cleaned."

echo ""
echo "==> [LOCAL → ATHENA] Uploading build to staging..."
rsync -rtv -e "ssh ${SSH_OPTS}" "${BUILD_DIR}/" "${REMOTE}:${REMOTE_STAGING}/"
echo "    Upload complete."

echo ""
echo "==> [ATHENA] Deploying to ${DEST_DIR} ..."
remote_cmd "aklog && rsync -rtv --no-group --no-perms --omit-dir-times ${REMOTE_STAGING}/ ${DEST_DIR}/ && if [ -d ${REMOTE_STAGING}/assets ]; then rsync -rtv --delete --no-group --no-perms --omit-dir-times ${REMOTE_STAGING}/assets/ ${DEST_DIR}/assets/; fi"
echo "    Deploy complete."

echo ""
echo "==> [VERIFY] Comparing hashes..."
REMOTE_HASH=$(remote_cmd "sha256sum ${DEST_DIR}/index.html" | awk '{print $1}')
LIVE_HASH=$(curl -s "${SITE_URL}/index.html" | sha256sum | awk '{print $1}')

echo "    File on Athena:  ${REMOTE_HASH}"
echo "    Live site:       ${LIVE_HASH}"

if [[ "${REMOTE_HASH}" == "${LIVE_HASH}" ]]; then
  echo ""
  echo "==> SUCCESS — site is live and verified!"
  echo "    ${SITE_URL}"
else
  echo ""
  echo "==> MISMATCH — hashes don't match."
  echo "    This may be temporary caching. Try:"
  echo "    curl -s '${SITE_URL}/index.html?nocache=123' | sha256sum"
fi