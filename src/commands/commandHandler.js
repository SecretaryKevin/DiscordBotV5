const log = require("../utils/loggingOperations");
let commandName
function factCommandHandler(interaction) {
    // uses command name to reply to interaction using correct function in factCommands.js
    commandName = interaction.commandName;
    switch (commandName){
        case "fact":
            //TODO: Implement fact command
        case "add_fact":
            //TODO: Implement add_fact command
            break;
        case "get_all_facts":
            //TODO: Implement get_all_facts command
            break;
        case "update_fact":
            //TODO: Implement update_fact command
            break;
        case "delete_fact":
            //TODO: Implement delete_fact command
            break;
        default:
            log.error("Unknown fact command")
    }
}
function insultCommandHandler(interaction) {
    // uses command name to reply to interaction using correct function in insultCommands.js
    commandName = interaction.commandName;
    switch (commandName) {
        case "insult":
            //TODO: Implement insult command
            break;
        case "add_insult":
            //TODO: Implement add_insult command
            break;
        case "get_all_insults":
            //TODO: Implement get_all_insults command
            break;
        case "update_insult":
            //TODO: Implement update_insult command
            break;
        case "delete_insult":
            //TODO: Implement delete_insult command
            break;
        default:
            log.error("Unknown insult command")
            break;
    }
}

function otherCommandHandler(interaction) {
    // uses command name to reply to interaction using correct function in otherCommands.js
    commandName = interaction.commandName;
    switch (commandName) {
        case "ping":
            //TODO: Implement ping command
            break;
        case "statistics":
            //TODO: Implement statistics command
            break;
        default:
            log.error("Unknown command")
            break;
    }
}

function handleCommand(interaction){
    // uses command name to direct to the correct command handler
    commandName = interaction.commandName;
    if (commandName.includes("fact")) {
        factCommandHandler(interaction);
    } else if (commandName.includes("insult")) {
        insultCommandHandler(interaction);
    } else {
        otherCommandHandler(interaction);
    }
}

module.exports = {handleCommand}
