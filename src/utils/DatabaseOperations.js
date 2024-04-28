require("dotenv").config({path: '../../.env'});
const {MongoClient, ServerApi} = require('mongodb');
const log = require("./loggingOperations");
const url = process.env.MONGO_DB_URL;
const databaseName = "Database";

async function connectToDatabase(){
    try {
        const client = new MongoClient(url);
        await client.connect();
        log.info("Connected to database");
        return client;
    } catch (error) {
        log.error(`An error occurred while connecting to the database: ${error}`);
    }
}

async function getCollection(collectionName, client){
    try {
        const database = client.db(databaseName);
        return database.collection(collectionName);
    } catch (error) {
        log.error(`An error occurred while getting the collection: ${error}`);
    }
}

async function insertDocument(collectionName, document){
try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        document._id = await getNumberofDocuments(collectionName, client) + 1;
        await collection.insertOne(document);
        log.info("Inserted document into collection");
        await closeDatabase(client);
        return true
    } catch (error) {
        log.error(`An error occurred while inserting the document: ${error}`);
        return false
    }
}

async function getAlldocuments(collectionName){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        const documents = await collection.find({}).toArray();
        await closeDatabase(client);
        return documents;
    } catch (error) {
        log.error(`An error occurred while getting all documents: ${error}`);
    }
}

async function getNumberofDocuments(collectionName, client){
    try {
        const collection = await getCollection(collectionName, client);
        return await collection.countDocuments();
    } catch (error) {
        log.error(`An error occurred while getting the number of documents: ${error}`);
    }
}

async function getRandomDocument(collectionName){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        const numberOfDocuments = await getNumberofDocuments(collectionName, client);
        const randomIndex = Math.floor(Math.random() * numberOfDocuments);
        const randomDocument = await collection.findOne({}, {skip: randomIndex});
        await closeDatabase(client);
        return randomDocument;
    } catch (error) {
        log.error(`An error occurred while getting a random document: ${error}`);
    }
}

async function updateDocumentViaId(collectionName, filter, update){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        await collection.updateOne(filter, update);
        log.info("Updated document");
        await closeDatabase(client);
    } catch (error) {
        log.error(`An error occurred while updating the document: ${error}`);
    }
}

async function deleteDocumentViaId(collectionName, filter){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        await collection.deleteOne(filter);
        log.info("Deleted document");
        await closeDatabase(client);
    } catch (error) {
        log.error(`An error occurred while deleting the document: ${error}`);
    }
}


async function closeDatabase(client){
    try {
        await client.close();
        log.info("Closed database connection");
    } catch (error) {
        log.error(`An error occurred while closing the database connection: ${error}`);
    }
}

module.exports = {insertDocument}