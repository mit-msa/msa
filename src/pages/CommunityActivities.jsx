import { useState } from 'react';
import { Hero, Section } from '../components/ui';

import photo1 from '../assets/images/FreshmanOutingForWebsite/IMG_0592.jpg';
import photo2 from '../assets/images/FreshmanOutingForWebsite/IMG_0612.jpg';
import photo3 from '../assets/images/FreshmanOutingForWebsite/IMG_0613.jpg';
import photo4 from '../assets/images/FreshmanOutingForWebsite/IMG_0614.jpg';
import photo5 from '../assets/images/FreshmanOutingForWebsite/IMG_0615.jpg';
import photo6 from '../assets/images/FreshmanOutingForWebsite/IMG_0616.jpg';
import photo7 from '../assets/images/FreshmanOutingForWebsite/IMG_0618.jpg';
import photo8 from '../assets/images/FreshmanOutingForWebsite/IMG_0619.jpg';
import photo9 from '../assets/images/FreshmanOutingForWebsite/IMG_2336.JPEG';

const eid26ImageModules = import.meta.glob('../assets/images/Eid 26/*.{JPG,JPEG,PNG,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const ramadan2026ImageModules = import.meta.glob('../assets/images/Ramadan 2026/*.{JPG,JPEG,PNG,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const gradAlumniReceptionImageModules = import.meta.glob('../assets/images/Grad and Alumni Reception/*.{JPG,JPEG,PNG,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const fallDinner2025ImageModules = import.meta.glob('../assets/images/MSA Fall Dinner 2025/*.{JPG,JPEG,PNG,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

const suhoorTrip2025ImageModules = import.meta.glob('../assets/images/MSA Suhoor Trip 2025/*.{JPG,JPEG,PNG,jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

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
];

const eid26Photos = Object.entries(eid26ImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `Eid 26 community event photo ${index + 1}`,
  }));

const ramadan2026Photos = Object.entries(ramadan2026ImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `Ramadan 2026 community event photo ${index + 1}`,
  }));

const gradAlumniReceptionPhotos = Object.entries(gradAlumniReceptionImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `Grad and Alumni Reception community event photo ${index + 1}`,
  }));

const fallDinner2025PortraitFiles = new Set([
  'DSC_0020.JPG',
  'DSC_0032.JPG',
  'DSC_0034.JPG',
]);

const fallDinner2025Photos = Object.entries(fallDinner2025ImageModules)
  .sort(([pathA], [pathB]) => {
    const portraitA = fallDinner2025PortraitFiles.has(pathA.split('/').pop());
    const portraitB = fallDinner2025PortraitFiles.has(pathB.split('/').pop());

    if (portraitA !== portraitB) {
      return portraitA ? 1 : -1;
    }

    return pathA.localeCompare(pathB, undefined, { numeric: true });
  })
  .map(([, src], index) => ({
    src,
    alt: `MSA Fall Dinner 2025 community event photo ${index + 1}`,
  }));

const suhoorTrip2025Photos = Object.entries(suhoorTrip2025ImageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `MSA Suhoor Trip 2025 community event photo ${index + 1}`,
  }));

const communityEvents = [
  {
    id: 'msa-suhoor-trip-2025',
    title: 'MSA Suhoor Trip 2025',
    date: 'Spring 2025',
    tag: 'Ramadan',
    summary:
      'An early-morning suhoor trip during Ramadan 2025 that brought students together for a shared meal before dawn.',
    location: 'Greater Boston area',
    photos: suhoorTrip2025Photos,
  },
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
  {
    id: 'msa-fall-dinner-2025',
    title: 'MSA Fall Dinner 2025',
    date: 'Fall 2025',
    tag: 'Community Event',
    summary:
      'An annual fall dinner that brought the MIT MSA community together for food, fellowship, and celebration at the start of the academic year.',
    location: 'Lobdell Hall (MIT)',
    photos: fallDinner2025Photos,
  },
  {
    id: 'ramadan-2026',
    title: 'Ramadan 2026',
    date: 'Spring 2026',
    tag: 'Community Event',
    summary:
      'Community iftars and gatherings throughout Ramadan 2026 that brought students together for shared meals, prayer, and reflection.',
    location: 'Lobdell Hall (MIT)',
    photos: ramadan2026Photos,
  },
  {
    id: 'eid-26-2026',
    title: 'Eid 26',
    date: 'Spring 2026',
    tag: 'Community Event',
    summary:
      'An Eid celebration that brought the MIT MSA community together for reflection, food, and fellowship during Spring 2026.',
    location: 'Lobdell Hall (MIT)',
    photos: eid26Photos,
  },
  {
    id: 'grad-alumni-reception-2026',
    title: 'Grad & Alumni Reception',
    date: 'Spring 2026',
    tag: 'Graduation',
    summary:
      'A reception honoring graduating students and welcoming alumni back to celebrate their milestones with the MIT MSA community.',
    location: 'MIT Musalla (W11)',
    photos: gradAlumniReceptionPhotos,
  },
];

/**
 * Community activities page showcasing moments from MSA events.
 */
export default function CommunityActivities() {
  const [expandedEventId, setExpandedEventId] = useState(null);
  const [expandedPhoto, setExpandedPhoto] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const toggleEvent = (eventId) => {
    setExpandedEventId((currentId) => (currentId === eventId ? null : eventId));
  };

  const togglePhoto = (photo) => {
    setExpandedPhoto((currentPhoto) => {
      const nextPhoto = currentPhoto?.src === photo.src ? null : photo;
      setZoomLevel(1);
      return nextPhoto;
    });
  };

  const handlePhotoKeyDown = (event, photo) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      togglePhoto(photo);
    }
  };

  const handleLightboxKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Escape') {
      event.preventDefault();
      setExpandedPhoto(null);
      setZoomLevel(1);
    }
  };

  const closeLightbox = () => {
    setExpandedPhoto(null);
    setZoomLevel(1);
  };

  const handleLightboxMouseDown = (event) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
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
              Get a glimpse into the vibrant life of the MIT MSA community through our event galleries. Each gallery captures the spirit of our gatherings, from welcoming new members to celebrating milestones together. Click on each event to explore the photos and relive the moments that make our community special.
            </p>
          </div>

          <div className="events-list" aria-label="Community event galleries">
            {communityEvents.map((event) => {
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
                            loading="lazy"
                            decoding="async"
                            onClick={() => togglePhoto(photo)}
                            onKeyDown={(event) => handlePhotoKeyDown(event, photo)}
                            role="button"
                            tabIndex={0}
                            aria-label={`Expand ${photo.alt}`}
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

      {expandedPhoto && (
        <div
          className="gallery-lightbox"
            onMouseDown={handleLightboxMouseDown}
          onKeyDown={handleLightboxKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Close expanded image"
        >
          <div className="gallery-lightbox__viewport">
            <img
              src={expandedPhoto.src}
              alt={expandedPhoto.alt}
              className="gallery-lightbox__image"
              loading="eager"
              decoding="async"
              style={{ width: `${zoomLevel * 100}%` }}
            />
          </div>
          <div className="gallery-lightbox__zoom">
            <label htmlFor="gallery-zoom" className="gallery-lightbox__zoom-label">
              Zoom
            </label>
            <input
              id="gallery-zoom"
              type="range"
              min="1"
              max="2.5"
              step="0.1"
              value={zoomLevel}
              onChange={(event) => setZoomLevel(Number(event.target.value))}
              className="gallery-lightbox__zoom-slider"
              aria-label="Zoom expanded image"
            />
          </div>
        </div>
      )}
    </>
  );
}
