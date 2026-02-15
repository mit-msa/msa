import { Hero, Section, Card } from '../components/ui';

// Prayer times data (generated at build time)
import prayerTimesData from '../data/prayer_times.json';

// Prayer space images
import w11Image from '../assets/images/prayer/w11.jpg';
import e51Image from '../assets/images/prayer/e51.jpeg';
import e52Image from '../assets/images/prayer/e52.jpeg';
import building45Image from '../assets/images/prayer/building_45.jpeg';
import oasisImage from '../assets/images/prayer/oasis.jpeg';

/**
 * Converts 24-hour time format (HH:MM) to 12-hour format with AM/PM
 * @param {string} time24 - Time in 24-hour format (e.g., "13:15")
 * @returns {string} Time in 12-hour format (e.g., "1:15 PM")
 */
function formatTime12Hour(time24) {
  if (!time24 || typeof time24 !== 'string') return time24;
  
  const [hours, minutes] = time24.split(':');
  const hour = parseInt(hours, 10);
  const min = minutes || '00';
  
  if (isNaN(hour)) return time24;
  
  const period = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  
  return `${hour12}:${min} ${period}`;
}

/**
 * Formats a date string for display, handling invalid dates gracefully
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date string or fallback text
 */
function formatLastUpdated(dateString) {
  if (!dateString) return null;
  
  const date = new Date(dateString);
  const isValidDate = !isNaN(date.getTime());
  
  if (!isValidDate) {
    return 'Recently';
  }
  
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Prayer page - Prayer spaces and times information
 */
export default function Prayer() {
  const prayerSpaces = [
    {
      name: 'MIT Musalla (W11)',
      location: 'Building W11',
      type: 'Primary',
      description:
        'The main prayer space for the MIT Muslim community. Used for daily prayers and Jumu\'ah.',
      image: w11Image,
    },
    {
      name: 'E52-112',
      location: 'Sloan Building E52, Room 112',
      type: 'Dedicated',
      description: 'Dedicated Muslim prayer room in the Sloan area.',
      image: e52Image,
    },
    {
      name: 'E51-050',
      location: 'Sloan Building E51, Room 050',
      type: 'Multi-faith',
      description: 'Non-denominational prayer and meditation space.',
      image: e51Image,
    },
    {
      name: 'Building 45',
      location: 'Building 45',
      type: 'Multi-faith',
      description: 'Additional prayer and meditation space on campus.',
      image: building45Image,
    },
    {
      name: 'Oasis',
      location: 'Hayden Library',
      type: 'Multi-faith',
      description: 'Quiet space for reflection and prayer on the second floor of Hayden Library.',
      image: oasisImage,
    },
  ];

  return (
    <>
      <Hero
        title="Prayer at MIT"
        subtitle="Find prayer spaces, Jumu'ah time, and everything you need for your daily prayers."
        className="hero--prayer"
      />

      {/* Daily Prayer Times */}
      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Daily Prayer Times</h2>
          <p className="text-muted mb-6">
            Prayer times for {prayerTimesData.mosque?.name || 'MIT Musalla'}, sourced from{' '}
            <a href="https://mawaqit.net/en/w/mit-musallah-cambridge" target="_blank" rel="noopener noreferrer" className="link">
              MAWAQIT
            </a>.
            {prayerTimesData.status === 'placeholder' && (
              <span className="text-warning"> Times are currently unavailable - showing placeholder data.</span>
            )}
          </p>

          <table className="prayer-times mb-8">
            <thead>
              <tr>
                <th>Prayer</th>
                <th>Adhan</th>
                <th>Iqama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fajr</td>
                <td>{prayerTimesData.times?.fajr || '--:--'}</td>
                <td>{prayerTimesData.iqama?.fajr || '--:--'}</td>
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{prayerTimesData.times?.sunrise || '--:--'}</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Dhuhr</td>
                <td>{prayerTimesData.times?.dhuhr || '--:--'}</td>
                <td>{prayerTimesData.iqama?.dhuhr || '--:--'}</td>
              </tr>
              <tr>
                <td>Asr</td>
                <td>{prayerTimesData.times?.asr || '--:--'}</td>
                <td>{prayerTimesData.iqama?.asr || '--:--'}</td>
              </tr>
              <tr>
                <td>Maghrib</td>
                <td>{prayerTimesData.times?.maghrib || '--:--'}</td>
                <td>{prayerTimesData.iqama?.maghrib || '--:--'}</td>
              </tr>
              <tr>
                <td>Isha</td>
                <td>{prayerTimesData.times?.isha || '--:--'}</td>
                <td>{prayerTimesData.iqama?.isha || '--:--'}</td>
              </tr>
            </tbody>
          </table>

          {prayerTimesData.lastUpdated && (
            <p className="text-sm text-muted">
              Last updated: {formatLastUpdated(prayerTimesData.lastUpdated)}
            </p>
          )}

          <div className="info-box mt-6">
            <h3 className="info-box__title">Additional Resources</h3>
            <p className="info-box__text mb-4">
              For prayer time calculations when traveling or for verification:
            </p>
            <ul className="list-disc">
              <li>
                <a href="https://mawaqit.net/en/w/mit-musallah-cambridge" target="_blank" rel="noopener noreferrer" className="link">
                  MAWAQIT - MIT Musalla Prayer Times
                </a>
              </li>
              <li>
                <a href="https://www.islamicfinder.org/prayer-times/city/cambridge-massachusetts/" target="_blank" rel="noopener noreferrer" className="link">
                  IslamicFinder - Cambridge Prayer Times
                </a>
              </li>
              <li>
                <a href="https://www.muslimpro.com/" target="_blank" rel="noopener noreferrer" className="link">
                  Muslim Pro App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Jumu'ah Section */}
      <Section id="jumuah" variant="light">
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Jumu'ah Prayer</h2>
          <div className="info-box mb-8">
            <h3 className="info-box__title">Every Friday</h3>
            <p className="info-box__text">
              <strong>Khutbah:</strong> {formatTime12Hour(prayerTimesData.jumua || '13:15')} EST<br />
              <strong>Location:</strong> MIT Musalla (Room W11-110)
            </p>
          </div>
          <p className="text-muted mb-4">
            The entire prayer should be finished by 1:50 - 2:00 PM EST. During the winter months,
            attendees are invited to stay a few extra minutes to pray 'Asr.
          </p>
          <p className="text-muted mb-4">
            Space becomes limited due to the large number of brothers and sisters who
            attend from MIT and the local community, so it is highly advised that you
            arrive on time. In the event that there is no space in the main prayer room, we have an overflow room in the W11 dining room.
          </p>
        </div>
      </Section>

      {/* Prayer Spaces Section */}
      <Section>
        <div className="container">
          <Section.Header
            title="Prayer Spaces on Campus"
            subtitle="Multiple locations available for your daily prayers."
          />

          <div className="grid grid--2">
            {prayerSpaces.map((space) => (
              <Card key={space.name}>
                {space.image && (
                  <Card.Image src={space.image} alt={space.name} />
                )}
                <Card.Content>
                  <div className="flex flex--between mb-2">
                    <Card.Title>{space.name}</Card.Title>
                    <span className={`badge ${space.type === 'Primary' ? '' : space.type === 'Dedicated' ? 'badge--secondary' : 'badge--neutral'}`}>
                      {space.type}
                    </span>
                  </div>
                  <Card.Subtitle>{space.location}</Card.Subtitle>
                  <Card.Text>{space.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Finding the Musalla / Map Section */}
      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Finding the Musalla</h2>
          <p className="text-muted mb-6">
            The MIT Musalla (W11-110) is located on the west side of campus. It's easily
            accessible from the Infinite Corridor and near the Student Center.
          </p>

          <div className="info-box mb-8">
            <h3 className="info-box__title">Directions</h3>
            <ul className="list-disc">
              <li>From the Infinite Corridor: Head west past Lobby 7, continue to Building W11</li>
              <li>From Kendall Square T Station: Walk west towards main campus, and continue until you reach Building W11</li>
            </ul>
          </div>

          <div className="card card--bordered p-6">
            <h3 className="card__title mb-4">Campus Map</h3>
            <p className="text-muted mb-4">
              Use the MIT interactive campus map to find prayer spaces and get directions.
            </p>
            <a
              href="https://whereis.mit.edu/?go=W11"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Open MIT Map (W11 - Musalla)
            </a>
          </div>
        </div>
      </Section>

      {/* Wudu Facilities */}
      <Section variant="light">
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Wudu (Ablution) Facilities</h2>
          <p className="text-muted mb-6">
            Wudu facilities are available near the main prayer spaces on campus.
          </p>

          <div className="grid grid--1">
            <div className="location-card">
              <h3 className="location-card__title">Musalla (W11)</h3>
              <p className="location-card__description">
                Dedicated wudu area available inside the Musalla building with separate
                facilities for brothers and sisters.
              </p>
            </div>
            <div className="location-card">
              <h3 className="location-card__title">Restroom Facilities</h3>
              <p className="location-card__description">
                Standard restroom facilities are available throughout campus buildings
                near all prayer spaces. Please be mindful of others when making wudu
                in shared restrooms.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Qibla Direction */}
      <Section variant="light">
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Qibla Direction</h2>
          <div className="info-box">
            <h3 className="info-box__title">Finding Qibla</h3>
            <p className="info-box__text">
              For precise Qibla direction from your current location, use a Qibla finder app
              or visit{' '}
              <a href="https://qiblafinder.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="link">
                Google Qibla Finder
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
