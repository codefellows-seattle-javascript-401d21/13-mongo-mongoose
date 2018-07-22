#Mongoose code sample and definition
Cat.save() //save to Track data
Cat.findById(id) //GET file  by ID, GET
Cat.find() //finds data (schema)
Cat.findByIdAndRemove(id) //DELETE by ID
Cat.findByIdAndUpdate(id, modelParams) //UPDATES data by ID and UPDATES
modelParams = {name: 'Happy Zildjian', sound: 'purr'})  //database. in my case Track

#IMPORTANT
make sure mango is running before running nodemon for some reason

#PUT COMMAND, UPDATE SNGLE FILE
 http PUT http://localhost:3000/api/v1/track/5a7280907d6f8d37ebc66860 artist="" title=""
 Use existing ID to update artist and title content


#GET COMMAND, FETCH
http GET http://localhost:3000/api/v1/track/5a7277470512ee34b1b30996
last part is an ID

#POST COMMAND, ADD DATA
http POST http://localhost:3000/api/v1/track artist="Michael Jackson" title="The Goat"
In return you get an ID which you can GET anytime!

#DELETE COMMAND
http DELETE http://localhost:3000/api/v1/track/5a72791f0512ee34b1b30997

