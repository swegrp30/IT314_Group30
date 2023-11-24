const { MongoClient } = require('mongodb');


const db = require("../connection/connect_stock");


const func = (async (req, res) => {

    try {

        // Access the 'reliance' collection within the 'ml' database
        const dataCollection = db.collection('data');

        // Perform operations on the 'reliance' collection
        // For example:
        // Query all documents in the 'reliance' collection
        const alldataDocuments = await dataCollection.find({}).toArray();
        res.status(200).send(alldataDocuments);

    } catch (error) {
        console.log("This is error from reliance.js");
        console.log(error);
        res.status(400).send();
    }

})



module.exports = func;