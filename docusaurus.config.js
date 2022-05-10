// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkSubSuper = require("remark-sub-super");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "difranca",
  tagline: "Dinosaurs are cool",
  url: "https://difranca.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "difranca", // Usually your GitHub org/user name.
  projectName: "difranca.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/tech",
          routeBasePath: "tech-notes",
          sidebarPath: require.resolve("./sidebar-tech.js"),
          remarkPlugins: [remarkSubSuper],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/difranca/difranca.github.io/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "@cmfcmf/docusaurus-search-local",
    [
      "@docusaurus/plugin-client-redirects",
      {
        createRedirects(existingPath) {
          if (existingPath.includes("/learning-notes")) {
            return [existingPath.replace("/learning-notes", "/tech-notes")];
          }
          return undefined;
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "difranca",
        logo: {
          alt: "My Site Logo",
          src: "img/icon.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tech-Notes",
          },
          {
            href: "https://github.com/difranca/difranca.github.io",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",

        links: [
          {
            title: "Learning",
            items: [
              {
                label: "Tech-Notes",
                to: "/tech-notes",
              },
            ],
          },
          {
            title: "Profiles",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/difranca",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/difranca",
              },
            ],
          },
          {
            title: "Tools",
            items: [
              {
                label: "Docusaurus",
                href: "https://docusaurus.io",
              },
              {
                label: "GitHub Pages",
                href: "https://pages.github.com",
              },
            ],
          },
          {
            title: "License",
            items: [
              {
                html: `<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="License" style="height: 40px !important;" ></a>`,
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["hcl"],
      },
    }),
};

module.exports = config;
