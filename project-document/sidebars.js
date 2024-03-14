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
      label: "Specifications",
      items: [
        {
          type: "doc",
          label: "Terms",
          id: "specifications/terms"
        }, {
          type: "doc",
          label: "Group And Container",
          id: "specifications/group-and-container"
        }, {
          type: "doc",
          label: "Others",
          id: "specifications/others"
        }, {
          type: 'category',
          label: "Detail",
          items: [
            {
              type: "doc",
              label: "Invitation Link",
              id: "specifications/detail/invitation-to-group"
            }
          ]
        }
      ]
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
              label: "Group Aggregate",
              items: [
                {
                  type: "doc",
                  label: "Group",
                  id: "domain-model/group-context/group-aggregate/group"
                }
              ]
            },
            {
              type: "category",
              label: "Container Aggregate",
              items: [
                {
                  type: "doc",
                  label: "Container",
                  id: "domain-model/group-context/container-aggregate/container"
                },
                {
                  type: "doc",
                  label: "Food",
                  id: "domain-model/group-context/container-aggregate/food"
                }
              ]
            },
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
        },
        {
          type: "category",
          label: "Functions",
          items: [
            {
              type: "doc",
              label: "Main Function",
              id: "system-architecture/functions/main-function"
            },
            {
              type: "doc",
              label: "User Initialize Function",
              id: "system-architecture/functions/user-initialize-function"
            },
            {
              type: "doc",
              label: "Notification Service",
              id: "system-architecture/functions/notification-service"
            }
          ]
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
