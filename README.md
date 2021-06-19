# About

This project is based on the Mars Rover Kata and has a simple front-end to help visualise the Rovers movements.

The solution can be seen live here: https://billynm.github.io/mars-rover/

## Pre-requisites

To run this project, you’ll need to have Node >= 10 on your local machine.

## Local start

To run the application, firstly install the dependencies:

### `yarn install`

And then to start the project locally, simply run:

### `yarn start`

The app will then be running at [http://localhost:3000](http://localhost:3000).

## Testing

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test {filename.test.ts}` 

Is the easiest way to test a single file!

### Tip

The bulk of the logic to actually move the rovers position is within `updateRoversLocation.ts`.
