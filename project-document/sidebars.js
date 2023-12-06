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
  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Intro",
    }, {
      type: "category",
      label: "Domain Models",
      items: [
        {
          type: "doc",
          id: "domain-model/domain-model",
        }, {
          type: "category",
          label: "User Context",
          items: [
            {
              type: "doc",
              id: "domain-model/user-context/user",
              label: "User Context"
            }
          ]
        }, {
          type: "category",
          label: "Group Context",
          items: [
            {
              type: "category",
              label: "Container Aggregate",
              items: [
                {
                  type: "doc",
                  label: "Food",
                  id: "domain-model/group-context/food"
                }
              ]
            }
          ]
        }
      ]
    }, {
      type: "category",
      label: "System Architecture",
      items: [
        {
          type: "doc",
          label: "Overview",
          id: "system-architecture/overview"
        }
      ]
    }, {
      type: "category",
      label: "Database",
      items: [
        {
          type: "doc",
          id: "database/er-diagram",
          label: "ER Diagram"
        }, {
          type: "doc",
          id: "database/database",
          label: "Database Definition"
        }
      ]
    }
  ],
};

module.exports = sidebars;
