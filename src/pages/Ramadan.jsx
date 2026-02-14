import { Hero, Section } from '../components/ui';

/**
 * Ramadan page - Information and guest registration
 */
export default function Ramadan() {
  const guestRegistrationUrl =
    'https://script.google.com/macros/s/AKfycbzeVaz4D47Mje4CD1XnDzNTEFHYHAH_vUPjllq_W4XV8ycJ1sQ4bN45UrEu7f-zPBR1Fw/exec';

  return (
    <>
      <Hero
        title="Ramadan at MIT"
        subtitle="Register your guests for iftar using the form below. Requires an MIT email and MIT ID."
        className="hero--ramadan"
      />

      {/* Guest Registration Section */}
      <Section>
        <div className="container">
          <iframe
            src={guestRegistrationUrl}
            title="Ramadan Guest Registration"
            style={{
              width: '100%',
              height: '80vh',
              border: 'none',
              borderRadius: '8px',
            }}
          />
        </div>
      </Section>
    </>
  );
}
