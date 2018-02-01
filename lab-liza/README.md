# Lab 13 - Mongo

**Author**: Liza Oh

## Overview
This app is single resource API using the express framework.

## Getting Started
The user must:
*Npm init their project
*Download dependencies
*Brew Install HTTPIE/Use Postman
*Brew Install Mongo
*Npm i to install packages

## Examples:
**POST example:**
```
http POST http://localhost:3000/api/v1/lotr name=Sam species=hobbit
```

**GET example:**
```
http GET http://localhost:3000/api/v1/lotr
```

**PUT example:**
```
http PUT http://localhost:3000/api/v1/lotr/5a724c8df123d84912e87d0e name=Merry species=hobbit
```

**DELETE example:**
```
http DELETE http://localhost:3000/api/v1/note/be834b7b-4d6e-4d03-ba72-9dcdcd2cef2d
```

## Architecture
*Javascript
*Node
*Jest
*Mongo
*Mongoose
*Superagent
*Cors
*Body-parser
*Express