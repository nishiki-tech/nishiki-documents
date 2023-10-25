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
      "label": "Intro",
    }, {
      type: "category",
      label: "Domain Models",
      items: [
        {
          type: "doc",
          id: "domain-model/domain-model",
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
              // id: "domain-model/group-context",

            }
          ]
        }
      ]
    }, {
      type: "doc",
      id: "er-diagram/er-diagram"
    }
  ],
};

module.exports = sidebars;
