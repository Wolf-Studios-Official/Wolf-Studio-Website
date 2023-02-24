// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wolf Studios Website',
  tagline: 'Wolves are cool!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wolfstudioswebsite.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
           routeBasePath: '/', 
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Wolf-Studios-Official/Wolf-Studio-Website/tree/main',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement_bar',
        content:
          'Welcome to Wolf Studios official website! Maintained by Flas4hPT',
        backgroundColor: '#87CEEB',
        textColor: '#000000',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'TM0SAUQU48',
  
        // Public API key: it is safe to commit it
        apiKey: '768b965525b798b487cf2ed982eb50da',
  
        indexName: 'wolfstudioswebnetlify',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      navbar: {
        title: 'Wolf Studios Website',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-32x32.png',
          style: 'primary',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/Wolf-Studios-Official/Wolf-Studio-Website',
            label: 'GitHub',
            position: 'right',
            className: 'header-github-link'
          },
          {
            href: 'https://discord.gg/yc27sP6cm6',
            label: 'Discord',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        logo: {
          alt: 'Wolf Studios Logo',
          src: '/img/wolfstudios.jpg',
          href: 'https://discord.gg/yc27sP6cm6',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Wolf Studios Official, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      

      
    }),
};

module.exports = config;

