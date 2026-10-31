import { useEffect, useRef } from 'react';

const WIDGET_ID = 'AnBuMS4rkJ340L1exsCO1';
const API_KEY = 'msj_pk_l_-bnqzUmzNm4CRqFdirxnlfeeUV3T-mqA6mBgrqPls';
const SCRIPT_SRC = 'https://widgets.masjidal.com/timetable/v0/widget.js';
const SCRIPT_ID = 'masjidal-widget-script';

/**
 * Masjidal's custom element reads attributes only in connectedCallback and does
 * not observe later changes. React can append the node before attributes exist,
 * so we create the element imperatively with attributes set first.
 */
function loadMasjidalScript() {
  if (customElements.get('masjidal-widget')) {
    return Promise.resolve();
  }

  const existing = document.getElementById(SCRIPT_ID);
  if (existing) {
    return customElements.whenDefined('masjidal-widget');
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = SCRIPT_SRC;
    script.onload = () => {
      customElements.whenDefined('masjidal-widget').then(resolve).catch(reject);
    };
    script.onerror = () => reject(new Error('Failed to load Masjidal widget script'));
    document.head.appendChild(script);
  });
}

export default function MasjidalPrayerWidget() {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    let cancelled = false;

    loadMasjidalScript()
      .then(() => {
        if (cancelled || !hostRef.current) return;

        const el = document.createElement('masjidal-widget');
        el.setAttribute('async', '');
        el.setAttribute('widget-id', WIDGET_ID);
        el.setAttribute('type', 'prayer');
        el.setAttribute('api-key', API_KEY);
        host.replaceChildren(el);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      cancelled = true;
      host.replaceChildren();
    };
  }, []);

  return <div ref={hostRef} className="masjidal-widget-host" />;
}
