import { Hero, Section } from '../components/ui';

/**
 * Ramadan page - Information and guest registration
 */
export default function Ramadan() {
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSftR0kGo2YbVCq4pd6a8RJWne7XFhW9D9L9dS-IDcPihtaE7g/viewform?embedded=true"

  return (
    <>
      <Hero
        title="Ramadan at MIT"
        subtitle="Register your guests for iftar using the form below. Requires an MIT email and MIT ID."
        className="hero--ramadan"
      />

      {/* Guest Registration Section */}
      <Section>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <iframe
            src={googleFormURL}
            style={{
              width: '100%',
              maxWidth: '640px',
              height: '2279px',
              border: 'none'
            }}
            title="Ramadan Guest Registration Form"
          >
            Loading…
          </iframe>
        </div>
      </Section>
    </>
  );
}
