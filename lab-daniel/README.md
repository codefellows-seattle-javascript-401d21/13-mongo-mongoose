# Lab 13 Mongo Mongoose Documentation

# GET
  The get route has two functions one that grabs a single database record if it finds an id parameter and the other which grabs a list of all records id and name properties and passes them back in an array.

# POST
  Creates a new record based off the object passed to the server. It does this by passing it through a mongoose model and then passing it to the database.

# PUT
  Updates a record identified by the id parameter which is passed. It does this by first finding the record in question and then updating only the data passed as an object to the server.

# DELETE
  Deletes a record based off the identifying id which is passed.
  It does this by extracting the parameter id, finding the record in the database and then removing it from the database.