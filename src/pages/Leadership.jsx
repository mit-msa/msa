import { Hero, Section } from '../components/ui';
import nadaImage from '../assets/images/nada.jpg';

/**
 * Leadership page - Chaplain and team information
 */
export default function Leadership() {
  return (
    <>
      <Hero
        title="Leadership"
        subtitle="Meet our chaplain and learn about spiritual guidance at MIT."
      />

      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6">Muslim Chaplain</h2>

          <div className="flex flex-col md:flex-row gap-12 mb-8">
            <div className="flex-shrink-0 p-4">
              <img
                src={nadaImage}
                alt="Sister Nada Miqdadi El-Alami"
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Sister Nada Miqdadi El-Alami</h3>
              <p className="text-sm text-muted mb-4">MIT Muslim Chaplain</p>
              <p className="text-muted mb-4">
                Sister Nada Miqdadi El-Alami has been the MIT Muslim Chaplain to the Institute
                since 2017. Nada serves the needs of MIT Muslims by providing spiritual programming,
                supporting students, and advocating for student needs on campus.
              </p>
              <p className="text-muted mb-4">
                Prior to coming to MIT, Sister Nada served for over 15 years in leading spiritual
                study circles. She has planned and supported faith-oriented programs, such as camps
                and retreats, both locally and nationally. In addition, Sister Nada has led
                educational institutions focusing on young Muslims.
              </p>
              <p className="text-muted">
                Sister Nada holds a BA in Psychology and an MA in Administration and Leadership,
                and is pursuing a second MA in Islamic Leadership at Boston Islamic Seminary.
                She has been awarded an Ijaza (authenticated certificate) in teaching Qur'anic reading.
              </p>
            </div>
          </div>

          <div className="info-box mb-8">
            <h3 className="info-box__title">Activities and Services</h3>
            <ul className="list-disc">
              <li>
                <strong>Friday Connect</strong> — A weekly spiritual gathering at 5:30pm in the
                Musalla (W11-110) where various topics are discussed. Free dinner provided.
              </li>
              <li>
                <strong>Student Outreach</strong> — Reaches out to Muslim students to check on
                their wellbeing and hear about their experiences.
              </li>
              <li>
                <strong>Mentorship</strong> — Mentors students and helps with personal, social,
                spiritual, or academic concerns.
              </li>
              <li>
                <strong>Collaboration</strong> — Works with Dr. Hossein Mosallaei, the Muslim
                Shia Chaplain and advisor to Mobin, to ensure all students are served with equity.
              </li>
              <li>
                <strong>Advocacy</strong> — Advocates for Muslims on campus, including housing
                accommodations, halal food, and academic accommodations during Ramadan.
              </li>
              <li>
                <strong>Representation</strong> — Represents Muslims during meetings and panels.
              </li>
              <li>
                <strong>Islam 101 Sessions</strong> — Provides introductory Islam sessions during IAP.
              </li>
              <li>
                <strong>Interfaith Programs</strong> — Works with other chaplains from ORSEL to
                provide programs for all students.
              </li>
            </ul>
          </div>

          <div className="info-box mb-8">
            <h3 className="info-box__title">Contact Information</h3>
            <ul className="list-none">
              <li><strong>Address:</strong> 40 Massachusetts Avenue, Building W11 - Room 011</li>
              <li><strong>Phone:</strong> (617) 258-9285</li>
              <li><strong>Email:</strong> <a href="mailto:mchnada@mit.edu" className="link">mchnada@mit.edu</a></li>
            </ul>
          </div>

          <p className="text-muted">
            For more information about Muslim chaplaincy at MIT, please contact the{' '}
            <a
              href="https://studentlife.mit.edu/rl"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              MIT Office of Religious Life
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
