require("dotenv").config({ path: "./.env" });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!'
    },
    {
        name: 'statistics',
        description: 'Get statistics of the bot'
    },
    /*{
        name: "fact",
        description: "Get a random fact"
    },
    {
        name: "add_fact",
        description: "Add a fact",
        options: [
            {
                name: "fact",
                description: "The fact you want to add",
                type: 3,
                required: true
            }
        ]
    },
    {
        name: "get_all_facts",
        description: "Get all facts"
    },
    {
        name: "update_fact",
        description: "Update a fact",
        options: [
            {
                name: "old_fact_id",
                description: "The ID of the fact you want to update",
                type: 3,
                required: true
            },
            {
                name: "new_fact",
                description: "The updated fact",
                type: 3,
                required: true
            }
        ]
    },
    {
        name: "delete_fact",
        description: "Delete a fact from the database",
        options: [
            {
                name: "fact_id",
                description: "The ID of the fact you want to delete",
                type: 3,
                required: true
            }
        ]
    }*/
    {
        name: "insult",
        description: "insult something/someone",
        options: [
            {
                name: "target",
                description: "The target of the insult",
                type: 3,
                required: true
            }
        ]
    },
    {
        name: "add_insult",
        description: "Add an insult",
        options: [
            {
                name: "insult",
                description: "The insult you want to add",
                type: 3,
                required: true
            }
        ]
    },
    {
        name: "get_all_insults",
        description: "Get insults in groups of 10",
        options: [
            {
                name: "page",
                description: "The page of insults you want to see",
                type: 4,
                required: true
            }
        ]
    }
];

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(process.env.CLIENT_ID),
            { body: commands },
        );

        console.log('Successfully registered global application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
