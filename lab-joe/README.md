Lab - 13 - Joe Waine - Mongo and Mongoose

Getting situated with mongo and mongoose - we have basic server endpoints and have built out data models for an animal object.



Server Endpoints
/api/resource-name
POST request
should pass data as stringifed JSON in the body of a post request to create a new resource
/api/resource-name/:id
GET request
should pass the id of a resource through the url endpoint to get a resource
this should use req.params, not querystring parameters
PUT request
should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
DELETE request
should pass the id of a resource though the url endpoint to delete a resource
this should use req.params
Tests
create a test that will ensure that your API returns a status code of 404 for routes that have not been registered
create a series of tests to ensure that your /api/resource-name endpoint responds as described for each condition below:
GET - test 200, returns a resource with a valid body
GET - test 404, respond with 'not found' for valid requests made with an id that was not found
PUT - test 200, returns a resource with an updated body
PUT - test 400, responds with 'bad request' if no request body was provided
PUT - test 404, responds with 'not found' for valid requests made with an id that was not found
POST - test 400, responds with 'bad request' if no request body was provided
POST - test 200, returns a resource for requests made with a valid body
