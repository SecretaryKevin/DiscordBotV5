const { EmbedBuilder } = require("discord.js");

function generateInsultPageEmbed(Title, insults, page, totalPages) {
    const embed = new EmbedBuilder()
        .setTitle(Title)
        .setDescription(`Page ${page} of ${totalPages}`)
        .setColor(0x0099FF) // Set color
        .setThumbnail('https://i.imgur.com/AfFp7pu.png') // Set thumbnail

    const pageSize = 10; // Adjust as needed
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, insults.length);

    if (startIndex >= insults.length) {
        embed.setDescription("No insults found.");
    } else {
        for (let i = startIndex; i < endIndex; i++) {
            const insult = insults[i];
            embed.addFields({ name: insult._id.toString(), value: insult.insult });
        }
    }

    // Set footer
    embed.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    //TODO: Fox seems broken
    // Set timestamp
    embed.setTimestamp();
    console.log(embed)
    return embed;
}

module.exports = { generateInsultPageEmbed };
