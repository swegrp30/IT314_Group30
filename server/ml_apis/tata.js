const { MongoClient } = require('mongodb');


const db = require("../connection/connect_ML_DB");


const func = (async (req, res) => {

    try {

        // Access the 'tata' collection within the 'ml' database
        const tataCollection = db.collection('tata');

        // Perform operations on the 'tata' collection
        // For example:
        // Query all documents in the 'tata' collection
        const alltataDocuments = await tataCollection.find({}).toArray();
        res.status(200).send(alltataDocuments);

    } catch (error) {
        console.log("This is error from tata.js");
        console.log(error);
        res.status(400).send();
    }

})



module.exports = func;