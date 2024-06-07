const log = require("../utils/loggingOperations");
const {insertDocument, getRandomDocument, getRangeOfDocuments, getNumberofDocumentsExternal} = require("../utils/DatabaseOperations");
const collectionName = "insults";
const {generateInsultPageEmbed} = require("../utils/EmbedOperations");

async function insult(){
    // gets random insult from database and insults target
    return await getRandomDocument("insults");

}

function addInsult(newInsult){
    // adds a new insult to the database
    const insult = {
        insult: newInsult
    }
    const response = insertDocument(collectionName, insult);
    if (response){
        return "Insult added successfully"
    } else {
        return "An error occurred while adding the insult"
    }
}

async function getAllInsults(page= 1){
    // gets all insults from database in groups of 10 and returns the specified page
    let totalPages = await getNumberofDocumentsExternal(collectionName) / 10;
    await getRangeOfDocuments(collectionName, (page - 1) * 10, page * 10).then((data) => {
        return generateInsultPageEmbed(collectionName, data, page, totalPages)
    })
}

module.exports = { addInsult, insult, getAllInsults }