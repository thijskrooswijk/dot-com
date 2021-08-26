import { Link } from '../components/link'

export interface contentModel {
  clients: string[]
  current: string
  header: React.ReactNode
  projects: {
    client: string
    description: string
    url?: string
  }[]
  socials: {
    alt: string
    icon: string
    url: string
  }[]
  subHeading: string
  text: string
}

export const content: contentModel = {
  clients: [
    'Booking.com',
    'Nationale Nederlanden',
    'Elsevier',
    'Schiphol',
    'KLM',
    'United for Wildlife',
    'CM.com',
    'MCI',
    'VGZ',
    'Tilburg University',
    'Hogeschool Utrecht',
    'UWV',
    'VVV',
    'BUMA/Stemra',
    'h19 Centrum voor de kunsten',
    'Podium Bloos',
    'De Ketelfactory',
  ],
  current: 'Currently living in Vancouver, BC',
  header: (
    <>
      Open-source developer. Loves TypeScript and HTML/CSS. Working
      at Healthtrain (NL) and developing{' '}
      <Link to="https://github.com/wheelroom/wheelroom/">
        Wheelroom
      </Link>{' '}
      the fastest JAMstack tooling for applications.
    </>
  ),
  projects: [
    {
      client: 'HealthTrain',
      description: 'Design and Develop UI-library, incl. a Healthcare PWA',
    },
    {
      client: 'Wheelroom (open-source)',
      description: 'A JAMstack boilerplate',
      url: 'https://github.com/wheelroom/wheelroom/',
    },
    {
      client: 'Studio Drift – Ego',
      description: 'Art installation and management',
      url: 'https://www.studiodrift.com/work#/ego/',
    },
    {
      client: 'Elsevier',
      description: 'Web platform, web applications and eCommerce site',
      url: 'https://webshop.elsevier.com/',
    },
    {
      client: 'Wearlenses by Novartis',
      description: 'eCommerce platform',
      url: 'https://www.wearlenses.co.uk/',
    },
    {
      client: 'Schiphol',
      description: 'Web platform, tooling and prototyping',
      url: 'https://www.schiphol.nl/',
    },
    {
      client: 'Nationale Nederlanden',
      description: 'Web applications',
      url: 'https://www.nn.nl/',
    },
  ],
  socials: [
    {
      alt: 'linkedin',
      icon: '/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/thijskrooswijk/',
    },
    {
      alt: 'github',
      icon: '/icons/github.svg',
      url: 'https://www.github.com/thijskrooswijk/',
    },
    {
      alt: 'npm',
      icon: '/icons/npm.svg',
      url: 'https://www.npmjs.com/~thijskrooswijk',
    },
  ],
  subHeading: 'Latest work',
  text: 'I empowering companies and teams to implement and execute new technical solutions that support multi-channel services with speed and efficiency. With 12 years of experience, I’ve helped clients such as Elsevier, Schiphol, Novartis and NN, to iterate and grow over time in an agile process.',
}
