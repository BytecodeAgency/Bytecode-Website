# Bytecode Website

Website for Bytecode Digital Agency B.V. built with NextJS (server-side rendered React) and Styled Components.

## Dependencies

To run this develop environment, you need the follow dependencies:

* NodeJS 8+ (10 recommended)
* Yarn (install using `npm i -g yarn`)

To install all dependencies after cloning the Git repo, run `yarn`. Otherwise the project will not run.

## Setup

To setup the .env system, run `cp .env.example .env`, and set the desired variables.

## Development

To run the development environment, run:

```sh
yarn run dev
```

## Production

This website can both be exported to static HTML or run as a live server itself.

To use this project as a server for production, run

```sh
yarn run build
```

to build the pages and then run

```sh
yarn run start
```

to start the server.

#### Export

If you want to export the project to static HTML/CSS/JS, run `yarn run export`.

### Routes

All `GET`-routes are defined in `server/routes.js`.

The `POST`-route is `/post`.

## License and restrictions

This project is AGPL-3.0 licenced with certain restrictions for commercial use. These restrictions are as follows:

1. The files in the icon folder are proprietary, unless stated otherwise on the top of the file
2. The styles/theme.js file must be completely modified so that a modified version of this website will not include the same look and feel and markup, as Bytecode branding and markup is proprietary
3. Any written content, with the sole purpose of displaying text or custom content for meta tags, must be removed or completely modified, as website contents are proprietary
4. Images cannot be reused unless they are used under Creative Commons license
5. Any trademarks of Bytecode or their clients must be removed
6. All of the cases (in the pages/case folder) must be removed and completely rewritten

In short, this means that this project can be used under the AGPL-3.0 license, as long as all content is completely replaced, the styling has been modified and all trademarks have been removed, making sure all Bytecode branding and content has been removed.

Exceptions can be made for these restrictions, but are only valid with written consent from the owners of Bytecode. If you like Bytecode to make an exception, please send an email to [info@bytecode.nl](mailto:info@bytecode.nl).

Bytecode in this context means either Bytecode Holding B.V. or Bytecode Digital Agency B.V. as registered at the Handelsregister/KvK/Chamber of Commerce in The Netherlands.
