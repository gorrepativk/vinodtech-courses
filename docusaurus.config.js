// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VinodTech Courses',
  tagline: 'Hands-on Embedded Systems & IoT tutorials',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://courses.vinodtech.com',
  baseUrl: '/',

  organizationName: 'gorrepativk',
  projectName: 'vinodtech-courses',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // docs at site root
          editUrl: 'https://github.com/gorrepativk/vinodtech-courses/edit/main/',
        },
        blog: false, // disable blog for courses site
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'VinodTech Courses',
        logo: {
          alt: 'VinodTech',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Courses',
          },
          {
            href: 'https://vinodtech.com',
            label: 'Main Site',
            position: 'right',
          },
          {
            href: 'https://github.com/gorrepativk/vinodtech-courses',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Courses',
            items: [{ label: 'All Courses', to: '/' }],
          },
          {
            title: 'VinodTech',
            items: [
              { label: 'Main Site', href: 'https://vinodtech.com' },
              { label: 'Contact', href: 'https://vinodtech.com/contact' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VinodTech.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;