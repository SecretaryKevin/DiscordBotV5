require("dotenv").config({path: '../.env'});
const Discord = require("discord.js");
const log = require("./utils/loggingOperations");
const {handleCommand} = require("./commands/commandHandler");

const client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds,
        Discord.IntentsBitField.Flags.GuildMessages
    ]
});

client.on("ready", () => {
    log.info(`${client.user.tag} ready`);
})


client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()) return;
    log.info(`Received command ${interaction.commandName}`);
    handleCommand(interaction)

})

client.login(process.env.TOKEN)
    .then(() => log.success("Logged in successfully"))
    .catch((error) => log.error(`An error occurred while logging in: ${error}`))
