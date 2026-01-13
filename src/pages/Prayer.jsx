import { Hero, Section, Card } from '../components/ui';

// Prayer space images
import w11Image from '../assets/images/prayer/w11.jpg';
import e51Image from '../assets/images/prayer/e51.jpeg';
import e52Image from '../assets/images/prayer/e52.jpeg';
import building45Image from '../assets/images/prayer/building_45.jpeg';
import oasisImage from '../assets/images/prayer/oasis.jpeg';

/**
 * Animated mosque skyline component - multiple mosques appear sequentially
 */
function MosqueAnimation() {
  return (
    <div className="mosque-animation" aria-hidden="true">
      {/* Far left - tiny distant mosque */}
      <svg viewBox="0 0 200 140" className="mosque-svg mosque-1">
        <g className="mosque-part mosque-1-parts">
          <path d="M60 95 Q60 45 100 45 Q140 45 140 95" />
          <path d="M55 95 L145 95 L145 115 L55 115 Z" />
          <path d="M150 115 L150 55 L170 55 L170 115" />
          <path d="M147 55 L160 30 L173 55" />
        </g>
      </svg>

      {/* Left mosque */}
      <svg viewBox="0 0 300 200" className="mosque-svg mosque-2">
        <g className="mosque-part mosque-2-dome">
          <path d="M80 130 Q80 60 150 60 Q220 60 220 130" />
          <path d="M70 130 L230 130 L230 160 L70 160 Z" />
        </g>
        <g className="mosque-part mosque-2-minaret">
          <path d="M30 160 L30 70 L55 70 L55 160" />
          <path d="M25 70 L42 35 L60 70" />
        </g>
      </svg>

      {/* Center-left - medium mosque */}
      <svg viewBox="0 0 280 190" className="mosque-svg mosque-3">
        <g className="mosque-part mosque-3-parts">
          <path d="M90 125 Q90 55 140 55 Q190 55 190 125" />
          <path d="M80 125 L200 125 L200 155 L80 155 Z" />
          <path d="M35 155 L35 75 L60 75 L60 155" />
          <path d="M30 75 L47 40 L65 75" />
          <path d="M220 155 L220 85 L245 85 L245 155" />
          <path d="M215 85 L232 55 L250 85" />
        </g>
      </svg>

      {/* Center mosque (main, largest) */}
      <svg viewBox="0 0 400 250" className="mosque-svg mosque-4">
        <g className="mosque-part mosque-4-dome">
          <path d="M120 160 Q120 60 200 60 Q280 60 280 160" />
          <path d="M110 160 L290 160 L290 200 L110 200 Z" />
        </g>
        <g className="mosque-part mosque-4-minaret-left">
          <path d="M50 200 L50 80 L80 80 L80 200" />
          <path d="M45 80 L65 40 L85 80" />
        </g>
        <g className="mosque-part mosque-4-minaret-right">
          <path d="M320 200 L320 80 L350 80 L350 200" />
          <path d="M315 80 L335 40 L355 80" />
        </g>
      </svg>

      {/* Center-right - small mosque */}
      <svg viewBox="0 0 220 160" className="mosque-svg mosque-5">
        <g className="mosque-part mosque-5-parts">
          <path d="M60 110 Q60 50 110 50 Q160 50 160 110" />
          <path d="M50 110 L170 110 L170 135 L50 135 Z" />
          <path d="M175 135 L175 65 L195 65 L195 135" />
          <path d="M172 65 L185 40 L198 65" />
        </g>
      </svg>

      {/* Right mosque */}
      <svg viewBox="0 0 250 180" className="mosque-svg mosque-6">
        <g className="mosque-part mosque-6-dome">
          <path d="M70 120 Q70 50 125 50 Q180 50 180 120" />
          <path d="M60 120 L190 120 L190 150 L60 150 Z" />
        </g>
        <g className="mosque-part mosque-6-minaret">
          <path d="M200 150 L200 60 L225 60 L225 150" />
          <path d="M195 60 L212 30 L230 60" />
        </g>
      </svg>

      {/* Far right - tiny distant mosque */}
      <svg viewBox="0 0 180 130" className="mosque-svg mosque-7">
        <g className="mosque-part mosque-7-parts">
          <path d="M50 90 Q50 45 90 45 Q130 45 130 90" />
          <path d="M45 90 L135 90 L135 110 L45 110 Z" />
          <path d="M20 110 L20 55 L40 55 L40 110" />
          <path d="M17 55 L30 30 L43 55" />
        </g>
      </svg>
    </div>
  );
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
      >
        <MosqueAnimation />
      </Hero>

      {/* Jumu'ah Section */}
      <Section id="jumuah">
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Jumu'ah Prayer</h2>
          <div className="info-box mb-8">
            <h3 className="info-box__title">Every Friday</h3>
            <p className="info-box__text">
              <strong>Khutbah:</strong> 1:15 PM EST<br />
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
      <Section variant="light">
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

      {/* Daily Prayer Times */}
      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Daily Prayer Times</h2>
          <p className="text-muted mb-6">
            For accurate daily prayer times in Cambridge, MA, we recommend using
            a prayer time calculator or app. Prayer times change throughout the year
            based on the sun's position.
          </p>
          <div className="info-box">
            <h3 className="info-box__title">Recommended Resources</h3>
            <ul className="list-disc">
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
