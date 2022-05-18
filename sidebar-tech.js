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
    "intro",
    {
      type: "category",
      label: "☁ Cloud",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        description:
          "Topics about cloud computing providers and infrastructure as code.",
        keywords: ["cloud", "computing", "iac", "infrastructure"],
        slug: "cloud",
      },
      items: [
        {
          type: "category",
          label: "AWS",
          link: {
            type: "doc",
            id: "cloud/aws/intro",
          },
          items: ["cloud/aws/ec2"],
        },
        {
          type: "category",
          label: "Terraform",
          link: {
            type: "doc",
            id: "cloud/terraform/intro",
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
        type: "generated-index",
        description:
          "Practices that combines software development, security and operations.",
        keywords: [
          "devsecops",
          "devops",
          "ci/cd",
          "cicd",
          "development",
          "security",
          "operations",
        ],
        slug: "devsecops",
      },
      items: [
        {
          type: "category",
          label: "Argo CD",
          link: { type: "doc", id: "devsecops/argocd/intro" },
          items: ["devsecops/argocd/architecture"],
        },
        {
          type: "category",
          label: "Git",
          link: { type: "doc", id: "devsecops/git/intro" },
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
      label: "📜 Cheat Sheets",
      link: {
        type: "generated-index",
        description: "Quick reference for CLI commands.",
        keywords: ["cheat", "sheet", "cheatsheet"],
        slug: "cheats",
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
