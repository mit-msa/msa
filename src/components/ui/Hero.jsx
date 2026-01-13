import { useState, useEffect } from 'react';

/**
 * Hero section component for page headers
 *
 * @param {string} title - Main headline
 * @param {string[]} typingTitles - Array of titles to cycle through with typing animation
 * @param {string} subtitle - Supporting text
 * @param {ReactNode} actions - CTA buttons
 * @param {string} size - 'default' | 'lg'
 * @param {string} className - Additional CSS classes
 */
export default function Hero({
  title,
  typingTitles,
  subtitle,
  actions,
  size = 'default',
  className = '',
  children,
  ...props
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!typingTitles || typingTitles.length === 0) return;

    const currentTitle = typingTitles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % typingTitles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex, typingTitles]);

  const sizeClass = size === 'lg' ? 'hero--lg' : '';
  const classes = ['hero', sizeClass, className].filter(Boolean).join(' ');

  const displayTitle = typingTitles ? displayedText : title;

  return (
    <section className={classes} {...props}>
      <div className="hero__pattern" aria-hidden="true" />
      {children}
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">
            {displayTitle}
            {typingTitles && <span className="hero__cursor">|</span>}
          </h1>
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {actions && <div className="hero__actions">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
