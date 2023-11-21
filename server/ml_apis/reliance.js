const { MongoClient } = require('mongodb');


const db = require("../connection/connect_ML_DB");


const func = (async (req, res) => {

    try {

        // Access the 'reliance' collection within the 'ml' database
        const relianceCollection = db.collection('reliance');

        // Perform operations on the 'reliance' collection
        // For example:
        // Query all documents in the 'reliance' collection
        const allRelianceDocuments = await relianceCollection.find({}).toArray();
        res.status(200).send(allRelianceDocuments);

    } catch (error) {
        console.log("This is error from reliance.js");
        console.log(error);
        res.status(400).send();
    }

})



module.exports = func;