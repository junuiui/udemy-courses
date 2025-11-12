Testing
===

## What is Testing?
- Manual Testing
  - Write Code -> Preview & Test in Browser -> Improve Code -> Repeat
  - Very important: You see what your users will see
  - Error-prone: It's hard to always test all possible combinations & scenarios
- Automated Testing
  - Write code that automatically tests your code
  - You test the individual building blocks of your app
  - Requires extra knowledge but allows you to test all building blocks of your app

## Different Kinds of Automated Tests
- `Unit Test`
  - Test the **Individual** *building* *blocks* (functions, compoments) in **isolation**
  - Project typically contain dozens or hundreds of unit tests
- `Integration Tests`
  - Test **comination** of multiple building blocks.
  - Projects typically contain a couple of integration tests
- `End-to-End (E2E) Tests`
  - Test **Complete scenarios / user flows** in your app (as the user would experience them)
  - Projects typically contain only a few E2E tests

## What Should you test?
- What?
  - Test the different app building blocks
  - Unit test: The smallest building blocks that make up your app
- How?
  - Test success and error cases, also test rate (but possible) results

## Required Tools & Setup
- We need a tool for running our tests and asserting the results
  - `Jest`
- We need a tool for 'sumilating' (rendering) our React app / components
  - `React Testing Library`

- Both tools are already set up for your when using create-react-app

## Writing Tests - The Three 'A's
- `Arrange`: Set up the test data, test conditions and test environment
- `Act`: Run logic that should be tested (e.g., execute funtion)
- `Assert`: Compare execution results with expected results


## Summary
- Check out [Jest](https://jestjs.io/)