import { Hero, Section } from '../components/ui';

const committeeRoles = [
  {
    title: 'President',
    description:
      'The MSA President provides high-level leadership by overseeing the Executive Committee, assigning committee oversight, and helping committees set and meet goals aligned with MSA\'s mission. The President gives EC members independence in execution while helping them access resources, following up on responsibilities, and resolving issues between EC members and committees. The President is also the public face of MSA to the MIT community and administration. Requirements: at least one full prior EC term and a commitment to advise the next EC during transition.',
  },
  {
    title: 'Vice-President',
    description:
      'The MSA Vice President serves as a support for both the presidency role and the broader community. VP helps to run logistical operations of the MSA including communicating between administration and students.',
  },
  {
    title: 'Tarbiyah Committee Chair',
    description:
      'As the Tarbiyah and Musalla Committee, we are your go-tos for any spiritual needs! We primarily ensure Jumaa (the Friday Prayer) occurs weekly, organize daily congregational prayers, host halaqas and spiritual reminders, and maintain the musala (prayer area). During Ramadan, we also organize the tarawih (nightly) prayers in addition to other spiritually uplifting events. Feel free to reach out for any feedback or requests!',
  },
  {
    title: 'Treasurer',
    description:
      'The teasurer is responsible for managing the finances of the MSA, ensuring availability of funds, and coordinating the budget and spending across MSA events.',
  },
  {
    title: 'External Committee Chair',
    description:
      'The External and Alumni Relations Committee works closely with the MSA Ramadan Committee and MAA (Muslim Alumni Association) to run the MSA 24 hour challenge. During the challenge, the MSA raises upwards of $25,000 to help fund our nightly Ramadan Iftars and Eid activities. This committee also works to connect the MIT MSA with other clubs on campus and Muslim students in the area.',
  },
  {
    title: 'Social Committee Chair',
    description:
      'The Social Committee Chair organizes regular events that bring members of the MSA community together, including Tuesday Tea, study breaks, and game nights, and is in charge of organizing CPW events and Senior Night.',
  },
  {
    title: 'Publicity & Social Media Management Committee Chair',
    description:
      'The Publicity & Social Media Management Committee Chair publicizes MSA activities across communication channels (social media, mailing list, WhatsApp chat, dormspam, and more), creates and designs posters, handles external communication via social media, and oversees MSA content creation efforts.',
  },
  {
    title: 'Graduate Representative Committee Chair',
    description:
      'The Graduate Representative Committee Chair manages the Graduate Student MSA and its finances, runs events and initiatives focused on the graduate student community, and promotes graduate participation in broader programming.',
  },
  {
    title: 'Web Committee Chair',
    description:
      'The Web Committee Chair maintains the website, manages mailing lists, and handles all web-related matters for the MSA. They also follow up on inquiries submitted through the website and bring them to the Executive Committee when needed. Additionally, they develop automations that support Executive Committee operations, such as iftar guest management and Ramadan meal swipe tracking.',
  },
  {
    title: 'Large Events Committee Chair',
    description:
      'The Large Events Committee Chair organizes larger events that bring together members of the MSA community, such as Eid, Fall/Spring dinners, speaker series, and meal packs.',
  },
];

/**
 * Executive committee page with role responsibilities
 */
export default function ExecutiveCommittee() {
  return (
    <>
      <Hero
        title="Executive Committee"
        subtitle="Learn about the responsibilities of each executive committee role."
      />

      <Section>
        <div className="container container--md">
          <div className="section-header">
            <h2 className="section-header__title">Role Responsibilities</h2>
            <p className="section-header__subtitle">
              Each role supports the growth, logistics, and spiritual wellbeing of the MIT Muslim
              community.
            </p>
          </div>

          <div className="info-box mb-8">
            <h3 className="info-box__title">General Responsibilities</h3>
            <p className="info-box__text">
              All EC members are expected to attend weekly meetings and take on a smaller project,
              such as Retreat organization, freshman outreach, high school outreach, or orientation
              event planning during the summer.
            </p>
          </div>

          <div className="executive-roles">
            {committeeRoles.map((role) => (
              <article className="executive-role" key={role.title}>
                <h3 className="executive-role__title">{role.title}</h3>
                <p className="executive-role__description">{role.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}