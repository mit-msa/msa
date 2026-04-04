import { useState } from 'react';
import { Hero, Section } from '../components/ui';

import photo1 from '../assets/images/FreshmanOutingForWebsite/IMG_0592.JPG';
import photo2 from '../assets/images/FreshmanOutingForWebsite/IMG_0612.PNG';
import photo3 from '../assets/images/FreshmanOutingForWebsite/IMG_0613.PNG';
import photo4 from '../assets/images/FreshmanOutingForWebsite/IMG_0614.PNG';
import photo5 from '../assets/images/FreshmanOutingForWebsite/IMG_0615.PNG';
import photo6 from '../assets/images/FreshmanOutingForWebsite/IMG_0616.PNG';
import photo7 from '../assets/images/FreshmanOutingForWebsite/IMG_0618.PNG';
import photo8 from '../assets/images/FreshmanOutingForWebsite/IMG_0619.PNG';
import photo9 from '../assets/images/FreshmanOutingForWebsite/IMG_2336.JPEG';
import photo10 from '../assets/images/FreshmanOutingForWebsite/IMG_2347.JPEG';

const freshmanOutingPhotos = [
  { src: photo1, alt: 'Freshman outing group photo' },
  { src: photo2, alt: 'Freshman outing conversation and activities' },
  { src: photo3, alt: 'Freshman outing students smiling' },
  { src: photo4, alt: 'Freshman outing scenic moment' },
  { src: photo5, alt: 'Freshman outing students together outdoors' },
  { src: photo6, alt: 'Freshman outing candid community moment' },
  { src: photo7, alt: 'Freshman outing social gathering' },
  { src: photo8, alt: 'Freshman outing shared meal and conversation' },
  { src: photo9, alt: 'Freshman outing walk and community bonding' },
  { src: photo10, alt: 'Freshman outing closing group photo' },
];

const communityEvents = [
  {
    id: 'freshman-outing-2026',
    title: 'Freshman Outing',
    date: 'Fall 2025',
    tag: 'Welcome Event',
    summary:
      'A day of connection, reflection, and fun that helps incoming students feel at home in the MIT MSA community.',
    location: 'Boston Museum of Science',
    photos: freshmanOutingPhotos,
  },
];

/**
 * Community activities page showcasing moments from MSA events.
 */
export default function CommunityActivities() {
  const [expandedEventId, setExpandedEventId] = useState(communityEvents[0]?.id);

  const toggleEvent = (eventId) => {
    setExpandedEventId((currentId) => (currentId === eventId ? null : eventId));
  };

  return (
    <>
      <Hero
        title="Community Activities"
        subtitle="Browse our events timeline and open each gallery to see moments that bring our community to life."
      />

      <Section>
        <div className="container">
          <div className="community-activities__intro">
            <span className="badge badge--secondary">Community Timeline</span>
            <h2 className="community-activities__title">Event Galleries</h2>
            <p className="community-activities__text">
              Add new events by appending one object to the event list in this
              page, then attach photos to instantly generate another expandable
              gallery card.
            </p>
          </div>

          <div className="events-list" aria-label="Community event galleries">
            {communityEvents.map((event, eventIndex) => {
              const isExpanded = expandedEventId === event.id;

              return (
                <article
                  key={event.id}
                  className={`event-card ${isExpanded ? 'event-card--expanded' : ''}`}
                >
                  <button
                    type="button"
                    className="event-card__header"
                    onClick={() => toggleEvent(event.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`${event.id}-gallery`}
                  >
                    <div className="event-card__meta">
                      <span className="event-card__pill">{event.tag}</span>
                      <span className="event-card__date">{event.date}</span>
                    </div>
                    <h3 className="event-card__title">{event.title}</h3>
                    <p className="event-card__summary">{event.summary}</p>
                    <p className="event-card__location">{event.location}</p>
                    <div className="event-card__footer">
                      <span className="event-card__count">
                        {event.photos.length} photos
                      </span>
                      <span className="event-card__cta">
                        {isExpanded ? 'Hide gallery' : 'Open gallery'}
                      </span>
                    </div>
                    <span
                      className={`event-card__chevron ${
                        isExpanded ? 'event-card__chevron--open' : ''
                      }`}
                      aria-hidden="true"
                    >
                      ▾
                    </span>
                  </button>

                  <div
                    id={`${event.id}-gallery`}
                    className={`event-card__panel ${
                      isExpanded ? 'event-card__panel--open' : ''
                    }`}
                  >
                    <div className="outing-gallery">
                      {event.photos.map((photo, photoIndex) => (
                        <figure
                          key={photo.src}
                          className="outing-gallery__item"
                          style={{ '--stagger-order': photoIndex }}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            className="outing-gallery__image"
                            loading={eventIndex === 0 && photoIndex < 4 ? 'eager' : 'lazy'}
                          />
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
