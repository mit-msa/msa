import { createElement } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable Card component
 *
 * @param {string} variant - 'default' | 'bordered'
 * @param {string} to - If provided, makes the card clickable as a Link
 * @param {string} className - Additional CSS classes
 */
export default function Card({
  children,
  variant = 'default',
  to,
  className = '',
  ...props
}) {
  const baseClass = 'card';
  const variantClass = variant === 'bordered' ? 'card--bordered' : '';

  const classes = [baseClass, variantClass, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

/**
 * Card subcomponents for structured content
 */
Card.Image = function CardImage({ src, alt, className = '', ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`card__image ${className}`}
      {...props}
    />
  );
};

Card.Content = function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`card__content ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.Title = function CardTitle({ children, className = '', as: Tag = 'h3', ...props }) {
  return createElement(
    Tag,
    { className: `card__title ${className}`, ...props },
    children
  );
};

Card.Subtitle = function CardSubtitle({ children, className = '', ...props }) {
  return (
    <p className={`card__subtitle ${className}`} {...props}>
      {children}
    </p>
  );
};

Card.Text = function CardText({ children, className = '', ...props }) {
  return (
    <p className={`card__text ${className}`} {...props}>
      {children}
    </p>
  );
};
