// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wolf Studios Website',
  tagline: '',
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
           'https://github.com/Wolf-Studios-Official/Wolf-Studio-Website/tree/main',
           showLastUpdateAuthor: true,
           showLastUpdateTime: true,
           lastVersion: 'current',
      versions: {
        current: {
          label: 'current',
          path: '1.0.1',
        },
      },
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/favicon.ico',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'announcement_bar',
        content:
          'This website is still under progress.',
        backgroundColor: '#7F00FF',
        textColor: '#FFFFFF',
        isCloseable: false,
      },
      sidebar: {
        autoCollapseCategories: true,
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/wolfstudios.jpg',
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
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          
            ],
     logo: {
      alt: 'Image',
      src: '/img/wolfstudios.jpg',
      href: '/',
      },
        copyright: `Copyright © ${new Date().getFullYear()} Sigma-9 "Valkyries", Inc. Built with Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      // ... Your other themes.
      [
        // @ts-ignore
        require.resolve("@easyops-cn/docusaurus-search-local"),
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        // @ts-ignore
        ({

          hashed: true,
          docsRouteBasePath: '/',
        }),
      ],
    ],
  };

module.exports = config;