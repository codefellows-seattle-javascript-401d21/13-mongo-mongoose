# 13 Mongo Database
This app creates, reads, updates, and deletes files using MongoDB as it's database and Mongoose as middleware.

---
## Intalling and Getting Started
To use this app, for and git clone this repository to your local computer. Navigate to the `lab-melanie` directory and enter `npm install` in your command line, this will install all necessary dependencies.

Either use the Postman app or Httpie to have the ability to create and modify bikes. The following examples will be demonstrated with Httpie.

#### Create a Bicycle
In your terminal type:
```
http POST http://localhost:3000/api/v1/bike year=<year> color=<color> make=<make> category=<category>
```
Be sure to use single quotes if the descriptions contain more than one word.

If your filepath is incorrect, you will recieve an error message, otherwise you will see a status code of 201.

#### Get a Bike (or all bikes)
To get a specific bike, type in your command line:
```
http GET http://localhost:3000/api/v1/bike/<bike id>
```

To get all bikes:
```
http GET http://localhost:3000/api/v1/bike
```

This will return a list of all bike ids.

#### Update a Bike
In your command line, type:
```
http PUT http://localhost:3000/api/v1/bike/<bike id> year=<new year> color=<new color> make=<new make> category=<new category>
```
Just as creating a bike, be sure to use single quotes if the descriptions are longer than one word.

#### Delete a Bike
In your command line, type:
```
http DELETE http://localhost:3000/api/v1/bike/<bike id>
```

---

## Data Structures

### Route-Bike Module
This contains five methods that routes requests and responses from storage:
* `.post` - sends info from the http request to mongo to create a bike and sends a response back to the viewer
* `.get` - this has two methods, one that uses a specific id of a bike to read the file and send the response back to the viewer, the other only needs the schema (in this case `bike`) and returns the response from mongo as a list of bike ids
* `.put` - takes info from the http request and updates a bike in storage, then sends a response back to the viewer
* `.delete` - takes in the http request with a specific bike id, sends it to mongo to `remove` the file, then sends a status message back to the viewer

---

## Tests
The test directory is separated into three subdirectories: 

`integration-bike` contains files to test each http method, `POST`, `GET`, `PUT`, `DELETE`.

`lib` contains the jest port configuration

`unit-tests` contains files to test modules that the router and server rely on for requests and responses including:

 * `bike` - builds a bike object
 * `error-handler` - customizes error messages and returns the corresponding response