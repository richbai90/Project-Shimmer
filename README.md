# Webclient Application Server

This example was based off of the next.js official Material-UI example (https://github.com/mui-org/material-ui/tree/master/examples/nextjs)
React-Redux and Redux-Saga are both integrated

## How to use

Clone the repo and run `npm i && npm run dev`
Every URL has a corresponding React class defined in pages/ the job of this class is to get props from MUI and Redux providers and pass them to functional components
defined in pages/page-components. If new functionality is added to page-components, the redux/reducers and redux/sagas folders need to import that new functionality.

This package uses stateless functional components exclusively. All state management is handled by Redux. **DO NOT USE this.state **

## The idea behind the example

[Next.js](https://github.com/zeit/next.js) is a framework for server-rendered React apps.
