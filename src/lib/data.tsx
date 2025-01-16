import { Github, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoCSS3 from '/public/images/logos/css.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
// import LogoMaterialUI from '/public/images/logos/materialUI.svg';
import LogoHtml5 from '/public/images/logos/html.svg';
import LogoBootStrap from '/public/images/logos/bootstrap.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoGreenApex from '/public/images/logos/logo-greenapex.svg';
import LogoGreenApexLight from '/public/images/logos/logo-greenapex-light.svg';
import LogoDotnpixel from '/public/images/logos/logo-dotnpixel.svg';
import LogoDotnpixelLight from '/public/images/logos/logo-dotnpixel-light.svg';

import ProjectMeetup from '/public/images/meetup.png';
import ProjectWanderlust from '/public/images/project-wanderlust.png';
import ProjectZerodha from '/public/images/zerodha.png';

import AvatarPrashant from '/public/images/Prashant.jpg';
import AvatarSaurabh from '/public/images/Saurabh.jpg';
import AvatarVaibhav from '/public/images/Vaibhav.jpg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/shahsagarm',
  GITHUB_REPO: 'https://github.com/shahsagarm/sagarshah.dev',
  TWITTER: 'https://twitter.com/shahsagarm',
  FIGMA: 'https://www.figma.com/@shahsagarm',
  FIGMA_FILE:
    'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const NAV_LINKS = [
  {
    label: 'Projects',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/mayank1327',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/mayank-mehta-b3b9a0262/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Html5',
    logo: LogoHtml5,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'CSS3',
    logo: LogoCSS3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'BootStrap',
    logo: LogoBootStrap,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
//   {
//     label: 'Material UI',
//     logo: LogoMaterialUI,
//     url: 'https://git-scm.com/',
//   }
];


export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Wanderlust',
    description:
    "Wanderlust offers a seamless hotel booking experience, helping travelers find and book their perfect stay effortlessly. Discover handpicked accommodations that match your travel preferences and budget.",
    url: 'https://www.wingie.com',
    previewImage: ProjectWanderlust,
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'RestApi',
      'BootStrap',
      
    ],
  },
  {
    name: 'MeetUp',
    description:
    "Meetup is a tech-driven virtual platform that offers features like screen sharing, video and audio controls, and an interactive chat box, allowing users to engage, collaborate, and connect with others in a seamless online environment.",
    url: 'https://fiskil.com.au',
    previewImage: ProjectMeetup,
    technologies: [
      'React',
      'JavaScript',
      'Tailwindcss',
      'Material UI',
      'Express.js',
      'MongoDB',
      'Socket.io'

    ],
  },
  {
    name: 'Zerodha',
    description:
      '"Zerodha is an advanced trading platform that offers real-time market insights, seamless order execution, and powerful charting tools. With intuitive features like one-click trading, live stock tracking, and customizable watchlists, Zerodha ensures an efficient and smooth trading experience.',
    url: 'https://www.fiski.com',
    previewImage: ProjectZerodha,
    technologies: [
      'React',
      'JavaScript',
      'Express.js',
      'Tailwindcss',
      'Redux Toolkit',
    ],
  },

  // {
  //   name: 'Connectify',
  //   description:
  //     '"Connectify is a professional networking platform designed to help individuals and businesses build meaningful connections. With features like profile creation, job listings, skill endorsements, and messaging, Connectify fosters professional growth, collaboration, and networking."',
  //   url: 'https://pepehousing.com',
  //   previewImage: ,
  //   technologies: [
  //     'React',
  //     'JavaScript',
  //     'Tailwindcss',
  //     'Redux Toolkit',
  //     'React Query',
  //     'Storybook',
  //   ],
  // },
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Saurabh Dwivedi',
    personAvatar: AvatarSaurabh,
    title: '',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Mayank and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Prashant Hude',
    personAvatar: AvatarPrashant,
    title: '',
    testimonial:
      'Great guy, highly recommended for any full-stack development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Vaibhav Gupta',
    personAvatar: AvatarVaibhav,
    title: '',
    testimonial:
      'Mayank was extremely easy and pleasant to work with and he truly cares about the project being a success and was able to work on my MERN stack application without any issues.',
  },
];
