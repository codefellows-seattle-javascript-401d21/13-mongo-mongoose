# Lab 13 - Mongo DB RESTful HTTP API

**Author**: Steve Carpenter
**Version**: 1.0.0

## Overview
This is a RESTful HTTP API that utilizes the MongoDB database. It currently
supports storing data about students which is described in detail below.

## Getting Started
The user needs to do the following to use this student based Express API with MongoDB
-Clone the repository from github [here](https://github.com/stevegcarpenter/13-mongo-mongoose)
-Install all the necessary `npm` packages by executing `npm install`
-To run the `linter` check execute `npm run lint`
-There are two options to test the four HTTP methods (POST, GET, PUT, DELETE)
  -Start the nodemon server by executing `nodemon` and run manual requests
  -Run the integration tests via `npm run test` on the command line
-For manual requests, use a program like [HTTPie](https://httpie.org/) or [Postman](https://www.getpostman.com/).

## HTTP Method Directions
This RESTful HTTP server allows users to create simple descriptions of students which get stored in a MongoDB database.
-_POST_: Endpoint - `/api/v1/student`, Supported body fields:
  -`full_name`: _required_ String
  -`student_id`: _optional_ String
  -`age`: _optional_ Number
  -`campus`: _optional_ String
-_GET_: Endpoint - `/api/v1/student/:_id`, No data fields allowed
-_PUT_: Endpoint - `/api/v1/student/:_id`, All fields are optional for a PUT request:
  -`full_name`: String
  -`student_id`: String
  -`age`: Number
  -`campus`: String
-_DELETE_: Endpoint - `/api/v1/student/:_id`, No data fields allowed

## Architecture
-NodeJS
-Express
-npm
-JS
-cors
-MongoDB

## Change Log
2018-01-31 Adding boilerplate scaffolding
2018-01-31 Adding the error-handler.js
2018-01-31 Adding student model file
2018-01-31 Adding server.js code
2018-01-31 Added some user defined exclusions
2018-01-31 Updated the gitignore
2018-01-31 Added the route student code
2018-01-31 Added the forgotten server.stop function
2018-01-31 Added code for the GET all students endpoint
2018-01-31 Removed unnecessary comments
2018-01-31 Finished PUT & DELETE endpoints for Person
2018-01-31 Added router.test.js file to write tests
2018-01-31 Use mongoose.disconnect() instead of server.db.disconnect()
2018-01-31 Moved the router test file
2018-01-31 Added 404 test for the GET endpoint
2018-01-31 Added setupfiles to the package.json file
2018-01-31 Adding the jest-setup.js file for testing
2018-01-31 Adding valid GET test
2018-01-31 Added invalid POST request test
2018-01-31 Added Valid POST request
2018-01-31 Added invalid PUT request test
2018-01-31 Added Valid PUT request test
2018-01-31 Added valid DELETE request test
2018-01-31 Adding Valid DELETE request test

## Credits and Collaborations
[NodeJS](https://nodejs.org)
[npm](https://www.npmjs.com/)
[JavaScript](https://www.javascript.com/)
[Express](https://expressjs.com/)
[Cors](https://www.npmjs.com/package/cors)
[MongoDB](https://www.mongodb.com/)
