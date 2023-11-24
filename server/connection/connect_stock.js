const { MongoClient } = require('mongodb');

var db;

try {
    // MongoDB Atlas connection URL with database name
    const uri = 'mongodb+srv://backend2:backend2@cluster0.qxwolth.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

    // Create a new MongoClient
    const client = new MongoClient(uri);

    // Connect to MongoDB Atlas
    client.connect();

    // Access the 'ml' database
    db = client.db('Stock_data');

    console.log("Connected To MONGO_Stock_DB");

} catch (error) {

    console.log("ERROR FROM connect.js")
    console.log(error);
}

module.exports = db;