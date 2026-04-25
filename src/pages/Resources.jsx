import { Hero, Section, Card } from '../components/ui';

// Restaurant images
import halalguysImg from '../assets/images/restaurants/halalguys.jpeg';
import shahsImg from '../assets/images/restaurants/shahs.jpg';
import silkRoadImg from '../assets/images/restaurants/silk-road.webp';
import babAlYemenImg from '../assets/images/restaurants/bab-al-yemen.jpg';
import turkishLazuriImg from '../assets/images/restaurants/turkish-lazuri.jpg';
import luxorCafeImg from '../assets/images/restaurants/luxor-cafe.jpg';
import aliBabaImg from '../assets/images/restaurants/ali-baba.jpg';
import crispyDoughImg from '../assets/images/restaurants/crispy-dough.png';
import jahungerImg from '../assets/images/restaurants/jahunger.jpg';
import sufraMediterraneanImg from '../assets/images/restaurants/sufra-mediterranean.jpg';
import ilmondoPizzeriaImg from '../assets/images/restaurants/ilmondo-pizzeria.jpg';
import falafelPlaceImg from '../assets/images/restaurants/falafel-place.png';
import arganaFalafelImg from '../assets/images/restaurants/argana.png';
import kushariGrillImg from '../assets/images/restaurants/kushari-grill.jpg';
import tribosPeriPeriImg from '../assets/images/restaurants/tribos-peri-peri.jpg';
import fattoushGrillImg from '../assets/images/restaurants/fattoush-grill.png';
import alisUyghurKitchenImg from '../assets/images/restaurants/alis-uyghur-kitchen.jpg';
import casablancaImg from '../assets/images/restaurants/casablanca.jpg';
import thymeSajImg from '../assets/images/restaurants/thyme-saj.jpg';
import madaImg from '../assets/images/restaurants/mada.png';
import nakhonHalalThaiImg from '../assets/images/restaurants/nakhon-halal-thai.jpg';
import blackseedImg from '../assets/images/restaurants/blackseed.jpg';
import davesImg from '../assets/images/restaurants/daves.jpeg';
import peshwariImg from '../assets/images/restaurants/peshwari.png';

// Mosque images
import isbImg from '../assets/images/mosques/ISB.jpg';
import roxburyImg from '../assets/images/mosques/roxbury_mosque.jpeg';
import waylandImg from '../assets/images/mosques/wayland_mosque.jpg';
import yusufImg from '../assets/images/mosques/yusuf_mosque.jpg';

// Grocery/Off-campus images
import foodlandImg from '../assets/images/off_campus_resources/foodland.jpeg';
import qualityImg from '../assets/images/off_campus_resources/quality.jpeg';
import cheemasImg from '../assets/images/off_campus_resources/cheemas.jpeg';
import alBaraImg from '../assets/images/off_campus_resources/al_bara.jpeg';
import gardenHalalImg from '../assets/images/off_campus_resources/garden_halal.jpeg';
import sayarImg from '../assets/images/off_campus_resources/sayar.jpeg';
import vanakImg from '../assets/images/off_campus_resources/vanak.jpg';

// MSA lounge images
import loungeImg1 from '../assets/images/Lounge pics/WhatsApp Image 2026-04-24 at 21.52.34.jpeg';

/**
 * Resources page - Helpful resources for Muslims at MIT
 */
export default function Resources() {
  const halalRestaurants = [
    {
      name: 'The Halal Guys',
      description: 'Famous halal food cart style with gyros, chicken, and falafel.',
      image: halalguysImg,
    },
    {
      name: "Shah's Halal",
      description: 'Halal food cart style with a South Asian flair.',
      image: shahsImg,
    },
    {
      name: 'Silk Road',
      description: 'Cambridge Uyghur restaurant known for hand-pulled noodles and hearty halal dishes.',
      image: silkRoadImg,
    },
    {
      name: 'Bab Al Yemen',
      description: 'Yemeni restaurant serving lamb mendi, haneeth, fahsa, and other traditional dishes.',
      image: babAlYemenImg,
    },
    {
      name: 'Turkish Lazuri',
      description: 'Mediterranean cafe with halal breakfast, lunch, and dinner.',
      image: turkishLazuriImg,
    },
    {
      name: 'Luxor Cafe',
      description: 'Family-owned Harvard Square cafe-deli with coffee, teas, pastries, and light bites.',
      image: luxorCafeImg,
    },
    {
      name: 'Ali Baba',
      description: 'Boston halal Middle Eastern and Turkish restaurant for delivery or takeout.',
      image: aliBabaImg,
    },
    {
      name: 'Crispy Dough',
      description: 'Halal pizza spot near ISBCC serving pizzas and comfort food.',
      image: crispyDoughImg,
    },
    {
      name: 'Jahunger',
      description: 'Award-winning Uyghur restaurant serving hand-pulled noodles and Central Asian specialties.',
      image: jahungerImg,
    },
    {
      name: 'Sufra Mediterranean',
      description: 'Boston Mediterranean restaurant with classic mezze and grill dishes.',
      image: sufraMediterraneanImg,
    },
    {
      name: 'Ilmondo Pizzeria',
      description: 'Boston pizzeria serving pizzas, subs, salads, and pasta.',
      image: ilmondoPizzeriaImg,
    },
    {
      name: 'Falafel Place',
      description: 'Somerville falafel shop with certified halal Middle Eastern plates.',
      image: falafelPlaceImg,
    },
    {
      name: 'Argana Falafel (MIT)',
      description: 'MIT-area falafel option for quick wraps, platters, and Middle Eastern bites.',
      image: arganaFalafelImg,
    },
    {
      name: 'Kushari & Grill',
      description: 'Medford restaurant for kushari, grilled meats, and Egyptian comfort food.',
      image: kushariGrillImg,
    },
    {
      name: 'Tribos Peri peri',
      description: 'Peri-peri chicken restaurant with bold grilled flavors.',
      image: tribosPeriPeriImg,
    },
    {
      name: 'Fattoush Grill',
      description: 'Halal grill and bakery serving Middle Eastern plates and mixed grill meals.',
      image: fattoushGrillImg,
    },
    {
      name: "Ali's Uyghur Kitchen",
      description: 'Boston Uyghur restaurant with hand-pulled noodles and regional specialties.',
      image: alisUyghurKitchenImg,
    },
    {
      name: 'Casablanca',
      description: 'Revere halal restaurant serving Moroccan and Middle Eastern dishes.',
      image: casablancaImg,
    },
    {
      name: 'Thyme Saj',
      description: 'Middle Eastern restaurant known for saj wraps, salads, and mezze.',
      image: thymeSajImg,
    },
    {
      name: 'Mada',
      description: 'Everett halal food truck serving quick Middle Eastern eats.',
      image: madaImg,
    },
    {
      name: 'Nakhon Halal Thai',
      description: 'Boston Thai halal spot serving curries, noodles, and stir-fries.',
      image: nakhonHalalThaiImg,
    },
    {
      name: 'Black Seed Halal Grill',
      description: 'Casual choice providing Middle Eastern eats like kabobs & falafel wraps, plus pancakes & omelets.',
      image: blackseedImg,
    },
    {
      name: 'Peshwari Kebab',
      description: 'Casual halal restaurant serving Pakistani dishes, including kebabs and slow-cooked barbecued meats.',
      image: peshwariImg,
    },
    {
      name: "Dave's Hot Chicken",
      description: 'Fried chicken and fries!',
      image: davesImg,
    },
  ];

  const halalGroceries = [
    {
      name: 'Foodland',
      description: 'Halal grocery store with fresh meat and Middle Eastern products.',
      image: foodlandImg,
    },
    {
      name: 'Quality Mart',
      description: 'Halal grocery and convenience store.',
      image: qualityImg,
    },
    {
      name: "Cheema's",
      description: 'South Asian grocery with halal meats and spices.',
      image: cheemasImg,
    },
    {
      name: 'Al Bara Market',
      description: 'Neighborhood halal market with pantry staples, fresh produce, and halal meat options.',
      image: alBaraImg,
    },
    {
      name: 'Garden Halal Market',
      description: 'Local halal grocery for meat, spices, and everyday essentials.',
      image: gardenHalalImg,
    },
    {
      name: 'Sayar Market',
      description: 'Convenient halal-friendly market carrying groceries and international products.',
      image: sayarImg,
    },
    {
      name: 'Vanak Market',
      description: 'Specialty market with Middle Eastern items, herbs, and halal-friendly ingredients.',
      image: vanakImg,
    },
  ];

  const localMosques = [
    {
      name: 'Islamic Society of Boston (Cambridge)',
      address: '204 Prospect St, Cambridge',
      website: 'https://isb-cambridge.org',
      description: 'Close to MIT, offers daily prayers and Friday khutbah.',
      image: isbImg,
    },
    {
      name: 'Islamic Society of Boston Cultural Center (ISBCC)',
      address: '100 Malcolm X Blvd, Roxbury',
      website: 'https://isbcc.org',
      description: 'Largest mosque in New England with extensive programs.',
      image: roxburyImg,
    },
    {
      name: 'Wayland Islamic Center',
      address: '7 Cochituate Rd, Wayland',
      website: '',
      description: 'Suburban mosque west of Boston.',
      image: waylandImg,
    },
    {
      name: 'Yusuf Mosque',
      address: 'Brighton, MA',
      website: '',
      description: 'Community mosque in the Brighton area.',
      image: yusufImg,
    },
  ];

  const msaLoungeImages = [
    {
      title: 'MSA Lounge - Seating Area',
      description: 'A cozy corner for catching up with friends, studying, and relaxing between classes.',
      image: loungeImg1,
    },
  ];

  const usefulLinks = [
    { name: 'MIT Chaplaincy', url: 'https://studentlife.mit.edu/rl', description: 'MIT Religious Life office' },
    { name: 'MIT Events Calendar', url: 'https://calendar.google.com/calendar/embed?src=mit.msa.docs%40gmail.com&ctz=America%2FNew_York', description: 'Official MIT MSA events' },
    { name: 'IslamicFinder', url: 'https://www.islamicfinder.org', description: 'Prayer times and Qibla direction' },
  ];

  const islamicResourceCategories = [
    {
      category: 'Muslim Mental Health Resources',
      links: [
        { name: 'Khalil Center', url: 'https://khalilcenter.com/' },
        { name: 'Family Youth Institute', url: 'https://www.thefyi.org/' },
        { name: 'Naseeha', url: 'https://naseeha.org/' },
      ],
    },
    {
      category: 'Quran Resources',
      links: [
        { name: 'Quran.com', url: 'https://quran.com/' },
        { name: 'Tanzeel.com', url: 'https://www.tanzeel.com/' },
      ],
    },
    {
      category: 'Quran Exegesis Resources',
      links: [
        { name: 'Ibn Katheer (audio)', url: 'https://www.salafisounds.com/tafsir-ibn-kathir-by-abu-hakeem-bilal-davis/' },
        { name: 'Al-Mawdudi', url: 'http://www.englishtafsir.com/' },
        { name: 'In the Shade of the Quran', url: 'https://alhamdolillah.com/book/in-the-shade-of-the-quran-english-sayyid-qutb-shaheed/' },
      ],
    },
    {
      category: 'Hadith Resources',
      links: [
        { name: 'Sunnah.com', url: 'https://sunnah.com/' },
        { name: 'Forty Hadith Nawawi', url: 'https://d1.islamhouse.com/data/en/ih_books/single2/en-hadith-nawawy-sahih.pdf' },
      ],
    },
    {
      category: 'Seerah / Life Story of Prophet Muhammad',
      links: [
        { name: 'Meeting Muhammad (videos)', url: 'https://www.youtube.com/playlist?app=desktop&list=PLQ02IYL5pmhHvZ02LKQVeey8H-2XBKMGb' },
        { name: 'Seerah by Yasir Qadhi (videos)', url: 'https://www.youtube.com/watch?v=95K8HQbbeS0&list=PLAEA99D24CA2F9A8F' },
        { name: 'Men and Women Around the Messenger', url: 'https://www.kalamullah.com/Books/Men%20And%20Women%20Around%20the%20Messenger.pdf' },
      ],
    },
    {
      category: 'Theology',
      links: [
        { name: 'Al-Sanusi', url: 'https://sunnianswers.files.wordpress.com/2011/08/sanusicreed-abuadam.pdf' },
        { name: 'Al-Hanbali\'s The Keys to Paradise', url: 'https://maktabahassunnahblog.files.wordpress.com/2015/10/the-key-to-paradise.pdf' },
        { name: 'Dehlevi\'s Perfection of Faith', url: 'https://archive.org/details/PerfectionOfFaith/page/n15/mode/2up' },
      ],
    },
    {
      category: 'Women',
      links: [
        { name: 'Female Scholars', url: 'https://muslimmatters.org/2021/03/15/two-questions-about-the-dictionary-of-female-scholars/' },
        { name: 'Upheld by Allah (videos)', url: 'https://yaqeeninstitute.org/yaqeen-institute/trailer-upheld-by-allah-women-in-the-quran' },
        { name: 'Yasmin Mogahed (video)', url: 'https://www.youtube.com/watch?v=m5Wt_h7_WPQ' },
        { name: 'Female Companions', url: 'https://ayeina.com/stories-of-sahabiyat/' },
        { name: 'Islamic Ruling on Hijab', url: 'https://yaqeeninstitute.org/read/paper/is-hijab-religious-or-cultural-how-islamic-rulings-are-formed' },
      ],
    },
    {
      category: 'Purification',
      links: [
        { name: 'Purification of the Heart', url: 'https://data.nur.nu/Kutub/English/Hamza-Yusuf_Purification-of-the-Heart.pdf' },
        { name: 'Heart Therapy by Albarghouthi', url: 'http://www.kalamullah.com/Books/Heart%20Therapy.pdf' },
      ],
    },
    {
      category: 'General Topics',
      links: [
        { name: 'About Islam', url: 'https://aboutislam.net/' },
        { name: 'Yaqeen Institute', url: 'https://yaqeeninstitute.org/' },
        { name: 'Muslim Matters', url: 'http://muslimmatters.org/' },
      ],
    },
    {
      category: 'Questions about Islam and Muslims',
      links: [
        { name: 'ING - Answers to FAQs about Islam and Muslims', url: 'https://ing.org/resources/for-all-groups/answers-to-frequently-asked-questions/answers-to-frequently-asked-questions-about-islam-and-muslims/' },
        { name: 'Towards Eternity (videos)', url: 'https://www.youtube.com/@TowardsEternity/videos' },
        { name: 'Institute of Social Policy and Understanding', url: 'https://www.ispu.org/' },
        { name: 'American Muslims: Facts vs. Fiction', url: 'https://www.upf.tv/films/american-muslim-facts/' },
      ],
    },
    {
      category: 'Ramadan and Eid',
      links: [
        { name: 'Ramadan', url: 'https://www.whyislam.org/ramadan/' },
        { name: 'Eid-al-Adha', url: 'https://www.whyislam.org/eidaladha/' },
      ],
    },
    {
      category: 'Just for Fun',
      links: [
        { name: 'Fit for Allah', url: 'https://www.instagram.com/zainab_fitforallah/?hl=en' },
        { name: 'Aida Azlin', url: 'https://www.aidaazlin.com/' },
        { name: 'Deen and Chai', url: 'https://www.youtube.com/channel/UCiTGEEhMAaBu6LPuPXsDYYQ/featured' },
      ],
    },
  ];

  return (
    <>
      <Hero
        title="Resources"
        subtitle="Helpful resources for Muslim life at MIT and in the Cambridge area."
      />

      {/* Halal Restaurants Section */}
      <Section variant="light" id="halal-food">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Halal Restaurants</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Halal dining options near MIT and in the Boston area. Always verify halal status directly with the restaurant.
          </p>
          <div className="grid grid--3">
            {halalRestaurants.map((item) => (
              <Card key={item.name}>
                <Card.Image src={item.image} alt={item.name} />
                <Card.Content>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Halal Groceries Section */}
      <Section id="groceries">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Halal Grocery Stores</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Find halal meat, spices, and other grocery items at these stores.
          </p>
          <div className="grid grid--3">
            {halalGroceries.map((item) => (
              <Card key={item.name}>
                <Card.Image src={item.image} alt={item.name} />
                <Card.Content>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Local Mosques */}
      <Section variant="light" id="mosques">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Local Mosques</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Mosques and Islamic centers in the Boston/Cambridge area.
          </p>
          <div className="grid grid--2">
            {localMosques.map((mosque) => (
              <Card key={mosque.name}>
                <Card.Image src={mosque.image} alt={mosque.name} />
                <Card.Content>
                  <Card.Title>{mosque.name}</Card.Title>
                  <Card.Subtitle>{mosque.address}</Card.Subtitle>
                  <Card.Text>{mosque.description}</Card.Text>
                  {mosque.website && (
                    <a href={mosque.website} target="_blank" rel="noopener noreferrer" className="link mt-2 block">
                      Visit website
                    </a>
                  )}
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Useful Links */}
      <Section>
        <div className="container container--md">
          <h2 className="text-3xl font-bold mb-6 text-center">Useful Links</h2>
          <div className="grid grid--2">
            {usefulLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card card--bordered"
                style={{ textDecoration: 'none' }}
              >
                <div className="card__content">
                  <h3 className="card__title">{link.name}</h3>
                  <p className="card__text">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* MSA Lounge */}
      <Section id="msa-lounge">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">MSA Lounge</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            A welcoming and cozy place where you can hang out with fellow members of the MSA and enjoy the many events held here.
          </p>
          <div className="grid grid--1">
            {msaLoungeImages.map((item) => (
              <Card key={item.title}>
                <Card.Image src={item.image} alt={item.title} />
                <Card.Content>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Islamic learning and deen resources */}
      <Section variant="light" id="islamic-resources">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Deen Exploration</h2>
          <p className="text-muted mb-8 text-center max-w-md mx-auto">
            Curated Islamic learning, reflection, and wellness resources for your spiritual journey.
          </p>
          <div className="grid grid--2">
            {islamicResourceCategories.map((group) => (
              <Card key={group.category} variant="bordered">
                <Card.Content>
                  <Card.Title as="h3" className="text-xl mb-4">
                    {group.category}
                  </Card.Title>
                  <ul className="resource-links-list m-0">
                    {group.links.map((resource) => (
                      <li key={resource.name} className="resource-links-list__item">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="resource-links-list__link"
                        >
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Card.Content>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
