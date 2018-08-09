# Bytecode Website

[![Build Status](https://travis-ci.com/BytecodeBV/Bytecode-Website.svg?token=ujgzXA5sTBHvAWKnQtZQ&branch=master)](https://travis-ci.com/BytecodeBV/Bytecode-Website)

Website for Bytecode Digital Agency B.V. built with NextJS (server-side rendered React) and Styled Components.

## Dependencies

To run this develop environment, you need the follow dependencies:

* NodeJS 8
* Yarn (install using `npm i -g yarn`)

To install all dependencies after cloning the Git repo, run `yarn`. Otherwise the project will not run.

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
