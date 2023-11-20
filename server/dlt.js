const { MongoClient } = require('mongodb');
const express = require("express");
const { mongo, default: mongoose } = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid');


// models
const reliance = require("./models/ML")


const mail_ = (async (req, res) => {


// MongoDB Atlas connection URL with database name
const uri = 'mongodb+srv://backend2:backend2@cluster0.qxwolth.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp';

// Create a new MongoClient
const client = new MongoClient(uri);

async function accessRelianceCollection() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();

    // Access the 'ml' database
    const db = client.db('ml');

    // Access the 'reliance' collection within the 'ml' database
    const relianceCollection = db.collection('reliance');

    // Perform operations on the 'reliance' collection
    // For example:
    // Query all documents in the 'reliance' collection
    const allRelianceDocuments = await relianceCollection.find({}).toArray();
    console.log('All documents in the "reliance" collection:', allRelianceDocuments);

    // Insert a new document into the 'reliance' collection
   

  } catch (error) {
    console.error('Error accessing "reliance" collection:', error);
  }
}




    res.send(200);
})


module.exports = mail_;