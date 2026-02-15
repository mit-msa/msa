#!/usr/bin/env python3
"""
Fetch prayer times from Mawaqit API and save to JSON for static site generation.

Usage:
    1. Install dependencies: pip install mawaqit python-dotenv
    2. Fill in .env file in project root with your credentials
    3. Run: python scripts/fetch_prayer_times.py

The generated JSON file will be used by the frontend during build time.
"""

import asyncio
import json
import os
from datetime import datetime, timedelta
from pathlib import Path

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).parent.parent / ".env")
except ImportError:
    pass  # python-dotenv not installed, use system env vars

# Configuration - Set these via .env file or environment variables
CONFIG = {
    "username": os.environ.get("MAWAQIT_USERNAME", ""),
    "password": os.environ.get("MAWAQIT_PASSWORD", ""),
    "api_token": os.environ.get("MAWAQIT_API_TOKEN", ""),  # Alternative to username/password
    "mosque_uuid": os.environ.get("MAWAQIT_MOSQUE_UUID", "18650"),
    # MIT coordinates for finding nearby mosques
    "latitude": 42.3601,
    "longitude": -71.0942,
}

OUTPUT_FILE = Path(__file__).parent.parent / "src" / "data" / "prayer_times.json"


async def fetch_prayer_times():
    """Fetch prayer times from Mawaqit API."""
    try:
        from mawaqit import AsyncMawaqitClient
    except ImportError:
        print("Error: mawaqit package not installed. Run: pip install mawaqit")
        return None

    # Validate configuration
    has_credentials = (CONFIG["username"] and CONFIG["password"]) or CONFIG["api_token"]
    if not has_credentials:
        print("Error: Missing Mawaqit credentials.")
        print("Set MAWAQIT_USERNAME and MAWAQIT_PASSWORD environment variables,")
        print("or set MAWAQIT_API_TOKEN.")
        return None

    client = None
    try:
        # Initialize client
        client_kwargs = {
            "longitude": CONFIG["longitude"],
            "latitude": CONFIG["latitude"],
        }
        
        if CONFIG["api_token"]:
            client_kwargs["api_token"] = CONFIG["api_token"]
        else:
            client_kwargs["username"] = CONFIG["username"]
            client_kwargs["password"] = CONFIG["password"]

        client = AsyncMawaqitClient(**client_kwargs)

        # IMPORTANT: Must authenticate first before other API calls
        print("Authenticating with Mawaqit...")
        await client.get_api_token()

        # Set the mosque UUID
        client.mosque = CONFIG["mosque_uuid"]

        # Fetch prayer times
        print(f"Fetching times for mosque: {CONFIG['mosque_uuid']}")
        prayer_times = await client.fetch_prayer_times()
        
        return prayer_times

    except Exception as e:
        print(f"Error fetching prayer times: {e}")
        return None
    finally:
        if client:
            await client.close()


def get_today_iqama(iqama_calendar):
    """Extract today's iqama times from the monthly calendar."""
    if not iqama_calendar:
        return None
    
    today = datetime.now()
    month_index = today.month - 1  # 0-indexed
    day = str(today.day)
    
    if month_index < len(iqama_calendar):
        month_data = iqama_calendar[month_index]
        if day in month_data:
            times = month_data[day]
            # times is [Fajr, Dhuhr, Asr, Maghrib, Isha]
            return {
                "fajr": times[0] if len(times) > 0 else "--:--",
                "dhuhr": times[1] if len(times) > 1 else "--:--",
                "asr": times[2] if len(times) > 2 else "--:--",
                "maghrib": times[3] if len(times) > 3 else "--:--",
                "isha": times[4] if len(times) > 4 else "--:--",
            }
    return None


def format_prayer_data(raw_data):
    """Format raw Mawaqit data for frontend consumption."""
    if not raw_data:
        return None

    # Extract today's adhan times (list format: [Fajr, Dhuhr, Asr, Maghrib, Isha])
    adhan_times = raw_data.get("times", [])
    times = {
        "fajr": adhan_times[0] if len(adhan_times) > 0 else "--:--",
        "sunrise": raw_data.get("shuruq", "--:--"),
        "dhuhr": adhan_times[1] if len(adhan_times) > 1 else "--:--",
        "asr": adhan_times[2] if len(adhan_times) > 2 else "--:--",
        "maghrib": adhan_times[3] if len(adhan_times) > 3 else "--:--",
        "isha": adhan_times[4] if len(adhan_times) > 4 else "--:--",
    }
    
    # Extract today's iqama times from calendar
    iqama = get_today_iqama(raw_data.get("iqamaCalendar"))
    if not iqama:
        iqama = {
            "fajr": "--:--",
            "dhuhr": "--:--",
            "asr": "--:--",
            "maghrib": "--:--",
            "isha": "--:--",
        }

    formatted = {
        "mosque": {
            "name": raw_data.get("name", "MIT Musalla"),
            "address": raw_data.get("localisation", "W11-110, MIT, Cambridge, MA"),
            "uuid": CONFIG["mosque_uuid"],
        },
        "lastUpdated": datetime.now().isoformat(),
        "jumua": raw_data.get("jumua", "13:15"),
        "times": times,
        "iqama": iqama,
    }
    
    return formatted


def save_prayer_times(data):
    """Save prayer times to JSON file."""
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Prayer times saved to {OUTPUT_FILE}")


def create_placeholder_data():
    """Create placeholder data when API is unavailable."""
    return {
        "mosque": {
            "name": "MIT Musalla",
            "address": "W11-110, MIT, Cambridge, MA",
            "uuid": CONFIG["mosque_uuid"],
        },
        "lastUpdated": datetime.now().isoformat(),
        "status": "placeholder",
        "message": "Prayer times will be available once Mawaqit credentials are configured.",
        "jumua": "13:15",
        "times": {
            "fajr": "--:--",
            "sunrise": "--:--",
            "dhuhr": "--:--",
            "asr": "--:--",
            "maghrib": "--:--",
            "isha": "--:--",
        },
        "iqama": {
            "fajr": "--:--",
            "dhuhr": "--:--",
            "asr": "--:--",
            "maghrib": "--:--",
            "isha": "--:--",
        },
    }


async def main():
    print("Fetching prayer times from Mawaqit...")
    
    raw_data = await fetch_prayer_times()
    
    if raw_data:
        data = format_prayer_data(raw_data)
        print("Successfully fetched prayer times!")
    else:
        print("Using placeholder data. Configure Mawaqit credentials to fetch real times.")
        data = create_placeholder_data()
    
    save_prayer_times(data)


if __name__ == "__main__":
    asyncio.run(main())