import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronRightIcon, Hero, Section } from '../components/ui';

import uncPic1 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.08.28.jpeg';
import uncPic2 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.08.57.jpeg';
import uncPic3 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.09.33.jpeg';
import uncPic4 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.10.07.jpeg';
import uncPic5 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.10.23.jpeg';
import uncPic6 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.10.32.jpeg';
import uncPic7 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.10.52.jpeg';
import uncPic8 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.12.25.jpeg';
import uncPic9 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.12.53.jpeg';
import uncPic10 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.13.19.jpeg';
import uncPic11 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.14.46.jpeg';
import uncPic12 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.14.59.jpeg';
import uncPic13 from '../assets/images/Unc Pics/WhatsApp Image 2026-03-16 at 23.15.31.jpeg';

const uncPics = [
  uncPic1,
  uncPic2,
  uncPic3,
  uncPic4,
  uncPic5,
  uncPic6,
  uncPic7,
  uncPic8,
  uncPic9,
  uncPic10,
  uncPic11,
  uncPic12,
  uncPic13,
];

const SLIDE_INTERVAL_MS = 4200;
const TRANSITION_MS = 900;
const TRANSITION_SAFETY_MS = 3000;

export default function About() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [incomingImageIndex, setIncomingImageIndex] = useState(null);
  const [isIncomingVisible, setIsIncomingVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeImageIndexRef = useRef(activeImageIndex);
  const isTransitioningRef = useRef(isTransitioning);
  const incomingImageIndexRef = useRef(incomingImageIndex);
  const showNextImageRef = useRef(null);

  const decodedImageIndexesRef = useRef(new Set([0]));
  const transitionSafetyTimeoutRef = useRef(null);
  const autoAdvanceTimeoutRef = useRef(null);

  const ensureImageDecoded = useCallback((index) => {
    if (decodedImageIndexesRef.current.has(index)) {
      return Promise.resolve();
    }

    const preloadImage = new window.Image();
    preloadImage.src = uncPics[index];

    if (typeof preloadImage.decode === 'function') {
      return preloadImage
        .decode()
        .catch(() => undefined)
        .then(() => {
          decodedImageIndexesRef.current.add(index);
        });
    }

    return new Promise((resolve) => {
      if (preloadImage.complete) {
        decodedImageIndexesRef.current.add(index);
        resolve();
        return;
      }

      preloadImage.onload = () => {
        decodedImageIndexesRef.current.add(index);
        resolve();
      };

      preloadImage.onerror = () => {
        resolve();
      };
    });
  }, []);

  useEffect(() => {
    activeImageIndexRef.current = activeImageIndex;
  }, [activeImageIndex]);

  useEffect(() => {
    isTransitioningRef.current = isTransitioning;
  }, [isTransitioning]);

  useEffect(() => {
    incomingImageIndexRef.current = incomingImageIndex;
  }, [incomingImageIndex]);

  const scheduleAutoAdvance = useCallback(() => {
    if (autoAdvanceTimeoutRef.current) {
      window.clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }

    autoAdvanceTimeoutRef.current = window.setTimeout(() => {
      if (showNextImageRef.current) {
        showNextImageRef.current();
      }
    }, SLIDE_INTERVAL_MS);
  }, []);

  const completeTransition = useCallback((nextIndex) => {
    if (transitionSafetyTimeoutRef.current) {
      window.clearTimeout(transitionSafetyTimeoutRef.current);
      transitionSafetyTimeoutRef.current = null;
    }

    if (autoAdvanceTimeoutRef.current) {
      window.clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }

    setActiveImageIndex(nextIndex);
    setIncomingImageIndex(null);
    setIsIncomingVisible(false);
    setIsTransitioning(false);

    scheduleAutoAdvance();
  }, [scheduleAutoAdvance]);

  const goToImage = useCallback((nextIndex) => {
    if (nextIndex === activeImageIndexRef.current || isTransitioningRef.current) {
      return;
    }

    if (autoAdvanceTimeoutRef.current) {
      window.clearTimeout(autoAdvanceTimeoutRef.current);
      autoAdvanceTimeoutRef.current = null;
    }

    const startTransition = () => {
      setIsIncomingVisible(false);
      setIncomingImageIndex(nextIndex);
      setIsTransitioning(true);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsIncomingVisible(true);
        });
      });

      if (transitionSafetyTimeoutRef.current) {
        window.clearTimeout(transitionSafetyTimeoutRef.current);
      }

      // Safety fallback in case transitionend is skipped (rare browser edge cases).
      transitionSafetyTimeoutRef.current = window.setTimeout(() => {
        completeTransition(nextIndex);
      }, Math.max(TRANSITION_SAFETY_MS, TRANSITION_MS + 500));
    };

    ensureImageDecoded(nextIndex).then(() => {
      if (isTransitioningRef.current || nextIndex === activeImageIndexRef.current) {
        return;
      }

      startTransition();
    });
  }, [completeTransition, ensureImageDecoded]);

  const showPreviousImage = useCallback(() => {
    goToImage((activeImageIndexRef.current - 1 + uncPics.length) % uncPics.length);
  }, [goToImage]);

  const showNextImage = useCallback(() => {
    goToImage((activeImageIndexRef.current + 1) % uncPics.length);
  }, [goToImage]);

  useEffect(() => {
    showNextImageRef.current = showNextImage;
  }, [showNextImage]);

  useEffect(() => {
    if (uncPics.length < 2) return undefined;

    uncPics.forEach((_, index) => {
      if (index !== 0) {
        ensureImageDecoded(index);
      }
    });

    scheduleAutoAdvance();

    return () => {
      if (transitionSafetyTimeoutRef.current) {
        window.clearTimeout(transitionSafetyTimeoutRef.current);
      }

      if (autoAdvanceTimeoutRef.current) {
        window.clearTimeout(autoAdvanceTimeoutRef.current);
      }
    };
  }, [ensureImageDecoded, scheduleAutoAdvance]);

  return (
    <>
      <Hero
        title="About Us"
        subtitle="Learn more about the MIT Muslim Students Association and what we do on campus."
        className="about-hero"
      />

      <Section size="sm" className="about-section">
        <div className="container container--lg">
          <div className="about-page">
            <div className="about-page__header">
              <p className="about-page__kicker">MIT Muslim Students Association</p>
              <h2 className="about-page__title">Community, Growth, and Belonging</h2>
            </div>

            <div className="about-page__content">
              <div className="about-gallery about-gallery--large">
                <div className="about-gallery__frame">
                  <img
                    src={uncPics[activeImageIndex]}
                    alt={`Unc Pics gallery image ${activeImageIndex + 1}`}
                    className="about-gallery__image about-gallery__image--base"
                  />
                  {incomingImageIndex !== null && (
                    <img
                      src={uncPics[incomingImageIndex]}
                      alt={`Unc Pics gallery image ${incomingImageIndex + 1}`}
                      className={`about-gallery__image about-gallery__image--incoming ${isIncomingVisible ? 'is-visible' : ''}`}
                      onTransitionEnd={(event) => {
                        if (
                          event.propertyName === 'opacity' &&
                          incomingImageIndexRef.current === incomingImageIndex &&
                          isTransitioningRef.current
                        ) {
                          completeTransition(incomingImageIndex);
                        }
                      }}
                    />
                  )}
                  <button
                    type="button"
                    className="about-gallery__control about-gallery__control--prev"
                    onClick={showPreviousImage}
                    aria-label="Show previous image"
                    disabled={isTransitioning}
                  >
                    <ChevronRightIcon width={20} height={20} />
                  </button>
                  <button
                    type="button"
                    className="about-gallery__control about-gallery__control--next"
                    onClick={showNextImage}
                    aria-label="Show next image"
                    disabled={isTransitioning}
                  >
                    <ChevronRightIcon width={20} height={20} />
                  </button>
                </div>
                <div className="about-gallery__dots" aria-hidden="true">
                  {uncPics.map((_, index) => (
                    <span
                      key={index}
                      className={`about-gallery__dot ${index === activeImageIndex ? 'is-active' : ''}`}
                    />
                  ))}
                </div>
              </div>

              <div className="about-message">
                <p className="about-message__eyebrow">Who We Are</p>
                <p className="about-message__lead mb-6">
                  The MIT Muslim Students Association is a vibrant and non-sectarian organization
                  that strives to support Muslims on campus in their practice of Islam, and to create
                  spaces where all students, Muslim and non-Muslim alike, can find a sense of belonging.
                </p>
                <p className="about-message__body">
                  Through hosting religious, educational, athletic, social, and professional events,
                  the MSA aims to serve as a hub for diverse programming that benefits the broader
                  student body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}