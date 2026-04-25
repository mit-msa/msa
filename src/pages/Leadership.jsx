import { Hero, Section } from '../components/ui';
import nadaImage from '../assets/images/nada.jpg';
import hosseinImage from '../assets/images/hossein.jpg';
import zehraImage from '../assets/images/zehra.jpeg';

/**
 * Leadership page - Chaplain and team information
 */
export default function Leadership() {
  return (
    <>
      <Hero
        title="Leadership"
        subtitle="Meet our chaplains and learn about spiritual guidance at MIT."
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
            <h3 className="info-box__title">Contact Information</h3>
            <ul className="list-none">
              <li><strong>Address:</strong> 40 Massachusetts Avenue, Building W11 - Room 011</li>
              <li><strong>Phone:</strong> (617) 258-9285</li>
              <li><strong>Email:</strong> <a href="mailto:mchnada@mit.edu" className="link">mchnada@mit.edu</a></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Shia Muslim Chaplain</h2>

          <div className="flex flex-col md:flex-row gap-12 mb-8">
            <div className="flex-shrink-0 p-4">
              <img
                src={hosseinImage}
                alt="Dr. Hossein Mosallaei"
                className="rounded-lg shadow-md"
                style={{ width: '18rem', height: '18rem', maxWidth: '18rem', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Dr. Hossein Mosallaei</h3>
              <p className="text-sm text-muted mb-4">Shia Muslim Chaplain</p>
              <p className="text-muted mb-4">
                Dr. Hossein Mosallaei is a Shia Muslim Chaplain at MIT who supports our students 
                through the Office of Religious, Spiritual, and Ethical Life, providing guidance, 
                pastoral care, and a welcoming space for spiritual reflection and community building.
              </p>
              <p className="text-muted mb-4">
                He has been actively involved with student groups at different universities and
                has supported Shia student efforts at MIT since 2007 through Mobin and MSA under{' '}
                <a href="https://sites.mit.edu/zekrmit/" className="link">ZEKR</a>, helping organize Quran Study, Dua Kumayl, Nahj al-Balagha, Sahifa Sajjadiya,
                and lecture series.
              </p>
              <p className="text-muted">
                His vision is to support Muslim students in staying spiritually fulfilled while
                they pursue their studies.
              </p>
            </div>
          </div>

          <div className="info-box mb-8">
            <h3 className="info-box__title">Contact Information</h3>
            <ul className="list-none">
              <li><strong>Email:</strong> <a href="mailto:hosseinm@mit.edu" className="link">hosseinm@mit.edu</a></li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6">Associate Muslim Chaplain</h2>

          <div className="flex flex-col md:flex-row gap-12 mb-8">
            <div className="flex-shrink-0 p-4">
              <img
                src={zehraImage}
                alt="Zehra Imam"
                className="rounded-lg shadow-md"
                style={{ width: '18rem', height: '18rem', maxWidth: '18rem', objectFit: 'cover' }}
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Zehra Imam</h3>
              <p className="text-sm text-muted mb-4">Associate Muslim Chaplain</p>
              <p className="text-muted mb-4">
                Zehra Imam is an Associate Muslim Chaplain at MIT where she serves the campus
                community by supporting students individually and through programs that create
                spaces conducive to wellbeing and belonging.
              </p>
              <p className="text-muted mb-4">
                She is the founder of <a href="https://www.instagram.com/illuminated_cities/?hl=en" className="link">Illuminated Cities</a>, a creative arts education organization that works
                with communities impacted by systemic violence. She was a 2024 Fellow at <a href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.sacred-2Dwrites.org_luce-2Dcohort-2Dsummer-2D2024&d=DwMFaQ&c=WO-RGvefibhHBZq3fL85hQ&r=COArRfeXqkGvKulfjUwwcc0IUQoP-x1ypJ8a4XkAJv0&m=0Mksqn8GdalXOOIoD9hUOWaVLIX-p671AT7mDVbTuSNfEunu0yDsE3Lxw-3IwtuP&s=KOsTDVIEJ_HCz3f6AbqTQXyT6UabaR9Q-ohSgOfK2FQ&e=" className="link">Sacred Writes</a>, and her work has been published in <em><a href="https://theintercept.com/2025/07/05/harvard-graduation-speech-gaza-palestine-genocide/" className="link">The Intercept</a></em>, <em><a href="https://www.thenation.com/authors/zehra-imam/" className="link">The Nation</a></em>, <em><a href="https://mondoweiss.net/author/zehra-imam/" className="link">Mondoweiss</a></em>,
                and <em><a href="https://rpl.hds.harvard.edu/news/2024/05/29/love-letters-to-god-in-palestine" className="link">Harvard's Religion and Public Life Blog</a></em>.
              </p>
              <p className="text-muted">
                Zehra has worked in international education and is a graduate of Harvard Divinity School.
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
                <strong>Dua Kumayl &amp; Lecture</strong> — Biweekly on Thursdays, Dua, Lecture, Dinner.
              </li>
              <li>
                <strong>Quran Study</strong> — Biweekly on Fridays, Exegesis (Tafsir) of Quran and Special Topics, Dinner.
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
                <strong>Collaboration</strong> — Works with Dr. Hossein Mosallaei, the Muslim Shia Chaplain, to ensure all students are served with equity.
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
