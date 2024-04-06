const { MongoClient } = require("mongodb");
require("dotenv").config();

module.exports.mongoConnection = async () => {
    const mongoUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DATABASENAME_LINK}.qtoocok.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_DATABASENAME}`;
    const mongoClient = new MongoClient(mongoUrl);

    try {
        if (mongoClient.connect()) {
            return await console.log("MongoDatabase is connected");          
        }
    } catch (error) {
        console.error("MongoDb has experienced a problem connecting database", error);
    }
}