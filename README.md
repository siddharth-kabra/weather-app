# Getting started with Weather App

## Objective

The core aim of Weather App is to display weather of a specific location for 
present day, next day and forecast of upcoming 5 days.

## Prerequisites

- Download node version [18.19.0](https://nodejs.org/en/blog/release/v18.19.0)

## Next version

- 14.1.4

## React version

- 18.2.0

### Project folder

weather-app

## Env variables

- NEXT_WEATHER_API_KEY=8S2F4CGN8FQ72SUPL6L64R95V

### Go to weather-app:

- Checkout to dev branch `git checkout dev`
- Create and `env` file and add the above mentioned variables
- Run `yarn`
- Run `yarn build` to create build
- Run `yarn start` to start the production ready build

### Key points:

- Added server side rendering and caching in cities API for better performance.
- Added debounce on search for optimised performance.
