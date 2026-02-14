import { Link } from 'react-router-dom';
import { Button, Card, Section, Hero, LocationIcon, UsersIcon, CalendarIcon } from '../components/ui';

// Images
import communityImage from '../assets/images/hs.svg';

/**
 * Home page component - Landing page for MIT MSA website
 */
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        typingTitles={["Welcome to the MIT MSA!", "As-salamu alaikum!"]}
        subtitle="A close-knit and welcoming community dedicated to supporting Muslims at MIT in their practice of Islam and building bridges of understanding with people of all faiths."
        size="lg"
        className="hero--home"
        actions={
          <>
            <Button to="/join" variant="secondary" size="lg">
              Join Our Community
            </Button>
            <Button
              to="/prayer"
              variant="outline"
              size="lg"
              style={{ borderColor: 'white', color: 'white' }}
            >
              Prayer Times
            </Button>
          </>
        }
      />

      {/* About Preview Section */}
      <Section>
        <div className="container">
          <div className="two-col">
            <div className="two-col__content">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-lg text-muted mb-6">
                The MIT Muslim Students Association is a close-knit and friendly
                community that aims to assist MIT Muslims with their practice of
                Islam and endeavors to promote understanding between Muslims and
                people of other faiths on campus.
              </p>
              <p className="text-muted mb-8">
                Representing hundreds of Muslims on campus, the MSA holds events
                year-round that promote peace, community, and the Islamic
                message. Whether you're a new student, visiting scholar, or
                community member, you're always welcome.
              </p>
              <Button to="/about" variant="primary">
                Learn More About Us
              </Button>
            </div>
            <div className="two-col__media">
              <img
                src={communityImage}
                alt="Eid 2024"
                style={{
                  width: '100%',
                  aspectRatio: '4/3',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Upcoming Events Section */}
      <Section>
        <div className="container">
          <Section.Header
            title="Upcoming Events"
            subtitle="Join us for our regular gatherings and special programs."
          />

          <div className="grid grid--3">
            <Card variant="bordered">
              <Card.Content>
                <span className="badge mb-4">Weekly</span>
                <Card.Title>Jumu'ah Prayer</Card.Title>
                <Card.Text>
                  Every Friday at 1:15 PM at the MIT Musalla (Room W11-110). Khutbah followed by congregational prayer.
                </Card.Text>
                <p className="text-sm text-muted mt-4">
                  <CalendarIcon width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  Every Friday at 1:15 PM EST
                </p>
              </Card.Content>
            </Card>

            <Card variant="bordered">
              <Card.Content>
                <span className="badge mb-4">Weekly</span>
                <Card.Title>Connect</Card.Title>
                <Card.Text>
                 A weekly spiritual gathering where a variety of topics are discussed, and speakers are welcome. Topics are suggested by attendees. Connect runs during the school year at 5:30 PM EST in the Musalla (Room W11-110). Dinner is provided for free.
                </Card.Text>
                <p className="text-sm text-muted mt-4">
                  <CalendarIcon width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  Every Friday at 5:30 PM EST
                </p>
              </Card.Content>
            </Card>

            <Card variant="bordered">
              <Card.Content>
                <span className="badge badge--neutral mb-4">Social</span>
                <Card.Title>Community Gatherings</Card.Title>
                <Card.Text>
                  Regular social events, dinners, and gatherings to build community bonds.
                </Card.Text>
                <p className="text-sm text-muted mt-4">
                  <CalendarIcon width={16} height={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  Various dates
                </p>
              </Card.Content>
            </Card>
          </div>

          <div className="calendar-embed mt-10">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=mit.msa.docs%40gmail.com&ctz=America%2FNew_York"
              title="MIT MSA Google Calendar"
              style={{
                border: 0,
                width: '100%',
                height: '600px',
                borderRadius: 'var(--radius-lg)',
              }}
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section variant="light">
        <div className="container">
          <Section.Header
            title="What We Offer"
            subtitle="From daily prayers to community events, we're here to support your spiritual journey at MIT."
          />

          <div className="grid grid--3">
            <Card>
              <Card.Content>
                <div className="feature-item__icon mb-4">
                  <LocationIcon />
                </div>
                <Card.Title>Prayer Spaces</Card.Title>
                <Card.Text>
                  Multiple prayer rooms across campus including the Musalla and
                  dedicated spaces in Sloan.
                </Card.Text>
                <Link to="/prayer" className="link mt-4 block">
                  Find prayer spaces
                </Link>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <div className="feature-item__icon mb-4">
                  <CalendarIcon />
                </div>
                <Card.Title>Jumu'ah Prayer</Card.Title>
                <Card.Text>
                  Weekly Friday prayers with khutbah at 1:15 PM EST in the Musalla.
                </Card.Text>
                <Link to="/prayer" className="link mt-4 block">
                  Jumu'ah details
                </Link>
              </Card.Content>
            </Card>

            <Card>
              <Card.Content>
                <div className="feature-item__icon mb-4">
                  <UsersIcon />
                </div>
                <Card.Title>Community Events</Card.Title>
                <Card.Text>
                  Regular gatherings, iftars during Ramadan, educational
                  programs, and social events.
                </Card.Text>
                <Link to="/about#events" className="link mt-4 block">
                  See our events
                </Link>
              </Card.Content>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="container">
          <div className="cta-section">
            <div className="cta-section__pattern-wrapper">
              <div className="cta-section__pattern" aria-hidden="true" />
            </div>
            <h2 className="cta-section__title">Stay Connected</h2>
            <p className="cta-section__text">
              Join our mailing list to receive updates about events, prayer
              times, and community news.
            </p>
            <Button to="/join" variant="secondary" size="lg">
              Join Our Mailing List
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
