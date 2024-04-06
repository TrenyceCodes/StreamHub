const express = require('express');
const { MongoClient } = require('mongodb');
const { mongoConnection } = require('./database/connection/connection');
const server = express();
require("dotenv").config();

server.get('/', (request, response) => {
    return response.send("Hello world, this should be working");
});

server.listen(process.env.SERVER_PORT, async () => {
    await mongoConnection()
    return console.log(`Server is running on ${process.env.SERVER_PORT}`);
});