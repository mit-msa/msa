import { Hero, Section, Button } from '../components/ui';
import { InstagramIcon, MailIcon } from '../components/ui/Icons';

/**
 * Join page - Mailing list signup and ways to get involved
 */
export default function Join() {
  return (
    <>
      <Hero
        title="Join MIT MSA"
        subtitle="Become part of our welcoming community and stay connected with Muslim life at MIT."
      />

      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Mailing List</h2>
          <p className="text-muted mb-6">
            Join our mailing list to receive updates about:
          </p>
          <ul className="list-disc mb-8 text-muted">
            <li>Community events and gatherings</li>
            <li>Ramadan programs and iftars</li>
            <li>Educational lectures and discussions</li>
            <li>Important community news</li>
          </ul>

          <div className="cta-section">
            <h3 className="cta-section__title">Subscribe to Our Mailing List</h3>
            <p className="cta-section__text">
              Click below to join our mailing list and stay connected with the MIT Muslim community.
            </p>
            {/* Replace this href with your actual mailing list signup link */}
            <Button
              href="mailto:msa-webmaster@mit.edu?subject=Mailing%20List%20Signup&body=Please%20add%20me%20to%20the%20MIT%20MSA%20mailing%20list.%0D%0AMy%20affiliation%20with%20MIT%20is%3A%20(undergrad%20%2B%20Class%20year%2C%20grad%2C%20postdoc%20etc.)."
              variant="secondary"
              size="lg"
            >
              Join Mailing List
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Other Ways to Connect</h2>

          <div className="grid grid--2 mt-8">
            <a
              href="https://www.instagram.com/mitmsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="card card--bordered"
              style={{ textDecoration: 'none' }}
            >
              <div className="card__content text-center">
                <div className="feature-item__icon mb-4 mx-auto">
                  <InstagramIcon />
                </div>
                <h3 className="card__title">Instagram</h3>
                <p className="card__text">@mitmsa</p>
                <p className="text-sm text-muted mt-2">
                  Follow us for updates and community highlights
                </p>
              </div>
            </a>

            <a
              href="mailto:msa-exec@mit.edu"
              className="card card--bordered"
              style={{ textDecoration: 'none' }}
            >
              <div className="card__content text-center">
                <div className="feature-item__icon mb-4 mx-auto">
                  <MailIcon />
                </div>
                <h3 className="card__title">Email</h3>
                <p className="card__text">msa-exec@mit.edu</p>
                <p className="text-sm text-muted mt-2">
                  Reach out with questions or to get involved
                </p>
              </div>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-muted mb-6">
            There are many ways to get involved with MIT MSA:
          </p>
          <ul className="list-disc text-muted">
            <li>Attend Jumu'ah prayers on Fridays</li>
            <li>Join us for community events and gatherings</li>
            <li>Volunteer to help organize events</li>
            <li>Participate in interfaith dialogues</li>
            <li>Help welcome new students during orientation</li>
            <li>Contribute to charity collections</li>
          </ul>
        </div>
      </Section>
    </>
  );
}
