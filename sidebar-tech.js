/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "docs/tech" }],

  // But you can create a sidebar manually

  tech: [
    "index",
    {
      type: "category",
      label: "☁ Cloud",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "cloud/index",
      },
      items: [
        {
          type: "category",
          label: "AWS",
          link: {
            type: "doc",
            id: "cloud/aws/index",
          },
          items: ["cloud/aws/ec2"],
        },
        {
          type: "category",
          label: "Terraform",
          link: {
            type: "doc",
            id: "cloud/terraform/index",
          },
          items: ["cloud/terraform/backend"],
        },
      ],
    },
    {
      type: "category",
      label: "♾ DevSecOps",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "devsecops/index",
      },
      items: [
        {
          type: "category",
          label: "Argo CD",
          link: { type: "doc", id: "devsecops/argocd/index" },
          items: ["devsecops/argocd/architecture"],
        },
        {
          type: "category",
          label: "Git",
          link: { type: "doc", id: "devsecops/git/index" },
          items: [
            "devsecops/git/pre-commit",
            {
              type: "link",
              label: "Cheats",
              href: "/tech-notes/cheats/devsecops/git",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "👨‍💻 Programming Languages",
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "languages/index",
      },
      items: [
        {
          type: "category",
          label: "JavaScript",
          link: { type: "doc", id: "languages/javascript/index" },
          items: ["languages/javascript/throttle-debounce"],
        },
      ],
    },
    {
      type: "category",
      label: "🧾 Cheat Sheets",
      link: {
        type: "doc",
        id: "cheats",
      },
      items: [
        {
          type: "autogenerated",
          dirName: "cheats",
        },
      ],
    },
  ],
};

module.exports = sidebars;
