# Description

Frontend client side food truck application, which uses technologies:

`React`
`Axios`
`Ant Design`
`Typescript`

This app calls the food-truck service (which needs to be started first) on localhost:3000. I decided to use ant design as a styling library to give the application a better look and feel. I use axios library for data fetching.

## Prerequisites

```sh
cp .env.dist .env
```

## Start project

### `npm install`

Installs the dependencies for the project

### `npm start`

Runs the app in development mode on PORT=4000

### `npm build`

Builds the app for production to the build folder.

## Project structure

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

This is a simple UI app, the app is organised with the following structure:

`/api` - axios api instance and endpoints

`/pages` - pages/screens shown in the app (Food Truck List)

`/modals` - modal components with business logic which show selected food truck details

## File structure

```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── api
│   │   └── index.ts
│   ├── index.tsx
│   ├── modals
│   │   └── FoodTruckModal
│   │       ├── FoodTruckModal.tsx
│   │       └── FoodTruckModal.types.ts
│   ├── pages
│   │   └── FoodTruckList
│   │       ├── FoodTruckList.constants.ts
│   │       ├── FoodTruckList.tsx
│   │       └── FoodTruckList.types.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── tsconfig.json
```