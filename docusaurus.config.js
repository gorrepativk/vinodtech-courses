// @ts-check
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
          routeBasePath: '/', // Courses at site root
          editUrl: 'https://github.com/gorrepativk/vinodtech-courses/edit/main/',
        },

        // ✅ BLOG ENABLED
        blog: {
          showReadingTime: true,
          blogTitle: 'VinodTech Blog',
          blogDescription:
            'Notes and deep-dives on Embedded Systems, IoT Security, Firmware, OTA, and production engineering.',
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },

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
        title: 'VinodTech',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Courses',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://vinodtech.com',
            label: 'Main Site',
            position: 'right',
          },
          {
            href: 'https://vinodtech.com/contact',
            label: 'Contact',
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
            title: 'Content',
            items: [{ label: 'Blog', to: '/blog' }],
          },
          {
            title: 'VinodTech',
            items: [
              { label: 'Main Site', href: 'https://vinodtech.com' },
              { label: 'Contact', href: 'https://vinodtech.com/contact' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} VinodTech`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;