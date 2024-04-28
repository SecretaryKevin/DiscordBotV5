const {MongoClient, ServerApi} = require('mongodb');
const log = require("./loggingOperations");
const url = process.env.MONGO_URL;
const databaseName = "database";

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
        const collection = database.collection(collectionName);
        await closeDatabase()
        return collection;
    } catch (error) {
        log.error(`An error occurred while getting the collection: ${error}`);
    }
}

async function insertDocument(collectionName, document){
try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        await collection.insertOne(document);
        log.info("Inserted document into collection");
    } catch (error) {
        log.error(`An error occurred while inserting the document: ${error}`);
    }
    await closeDatabase()
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

async function getNumberofDocuments(collectionName){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        const numberOfDocuments = await collection.countDocuments();
        await closeDatabase(client);
        return numberOfDocuments;
    } catch (error) {
        log.error(`An error occurred while getting the number of documents: ${error}`);
    }
}

async function getDocumentViaId(collectionName, id){
    try {
        const client = await connectToDatabase();
        const collection = await getCollection(collectionName, client);
        const document = await collection.findOne({id: id});
        await closeDatabase(client);
        return document;
    } catch (error) {
        log.error(`An error occurred while getting the document: ${error}`);
    }
}

async function updateDocument(collectionName, filter, update){
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

async function deleteDocument(collectionName, filter){
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