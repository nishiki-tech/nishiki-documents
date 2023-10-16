# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ bun install
```

### Local Development

```
$ bun run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### How to write document

This document uses the [docusaurus](https://docusaurus.io/).

You can create a new markdown file under the docs directory and write a document.
Then you have to reflect the file mapping to the sidebar.
The sidebar is controlled by *sidebars.js* so  you have to update it.
What should you write in it is written [here](https://docusaurus.io/docs/sidebar/items).
