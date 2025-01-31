# Unhandled JSON Error in Express.js POST Route

This repository demonstrates a common error in Express.js applications: the lack of proper error handling when processing JSON payloads in POST requests.

## The Bug

The `bug.js` file contains an Express.js server that handles POST requests to the `/users` route.  It expects a JSON payload containing user data. However, it lacks error handling for cases where the request body is not valid JSON or is missing required fields. This can lead to unexpected server crashes or vulnerabilities.

## The Solution

The `bugSolution.js` file shows how to address this issue using Express.js's built-in error handling middleware and JSON parsing options.  It includes comprehensive error handling to catch and gracefully handle various scenarios, including invalid JSON, missing data, and data type mismatches.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.
4. Send a malformed JSON payload (e.g., missing a required field or containing invalid JSON) to `http://localhost:3000/users` using a tool like Postman or curl. Observe the error.
5. Repeat steps 3 and 4 with `node bugSolution.js`. Observe the improved error handling.