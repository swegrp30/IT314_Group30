const { MongoClient } = require('mongodb');


const db = require("../connection/connect_ML_DB");


const func = (async (req, res) => {
    
    const comp = req.query['company'];
    console.log(comp);

    try {

        // Access the 'comp' collection within the 'ml' database
        const compCollection = db.collection(comp);

        // Perform operations on the 'comp' collection
        // For example:
        // Query all documents in the 'comp' collection
        const allcompDocuments = await compCollection.find({}).toArray();
        res.status(200).send(allcompDocuments);

    } catch (error) {
        console.log("This is error from ml_data.js");
        console.log(error);
        res.status(400).send();
    }

})



module.exports = func;