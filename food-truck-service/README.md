## Description

Server side Food Truck application, which uses technologies:

`Nest JS`
`MongoDB`
`Docker`
`Jest`
`Typescript`

For the implementation of this small service I decided to load the data from the API
from a local data.ts file, rather than calling the API. Since, the data dump was
readily available I decided to use this approach and seed the db on app initialization.

## Prerequisites

```sh
cp .env.dist .env
```

## Installation

```bash
$ npm install
```

## Running tests

```bash
$ npm run test
```

## Running the app with docker

Using docker-compose (Prerequisites - Docker)

```bash
$ docker-compose up --build
```

The application will be accessible at http://localhost:3000.

## Running the app without Docker (mongodb needs to be installed)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## App structure is as follows

Using a modular approach for Nest good practices, for better separation of concerns.

```
.
├── Dockerfile
├── README.md
├── data.ts
├── docker-compose.yml
├── logs.txt
├── nest-cli.json
├── package-lock.json
├── package.json
├── src
│   ├── app.module.ts
│   ├── config
│   │   └── config.service.ts
│   ├── database
│   │   ├── database.module.ts
│   │   └── seed.service.ts
│   ├── food-truck
│   │   ├── food-truck.controller.ts
│   │   ├── food-truck.module.ts
│   │   ├── food-truck.service.spec.ts
│   │   ├── food-truck.service.ts
│   │   └── schemas
│   │       └── food-truck.schema.ts
│   ├── main.ts
│   └── typings.d.ts
├── tsconfig.build.json
└── tsconfig.json
```

