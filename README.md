# Next.js 15 App Directory Bug: Dynamic Routes and Edge Runtime

This repository demonstrates a bug encountered in Next.js 15's App directory when using dynamic routes and edge runtime functions. The issue revolves around unexpected behavior in data fetching and route handling.

## Bug Description:

When fetching data within an edge runtime function for a dynamic route, the expected behavior is not consistently observed. This inconsistency leads to errors or incomplete data rendering on the client-side.

## Reproduction Steps:

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to a dynamic route (e.g., `/product/123`).
5. Observe the unexpected behavior (e.g., missing data, incorrect data, or errors).

## Expected Behavior:

The dynamic route should correctly fetch and display data from the edge runtime function.

## Actual Behavior:

The dynamic route may exhibit unexpected behavior, such as failing to fetch data, displaying incomplete data, or throwing errors.

## Solution:

The solution involves using a different data fetching strategy, such as a server-side component or a different approach to handle dynamic routes in the edge runtime.