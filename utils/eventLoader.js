const reqEvent = (event) => require(`../events/${event}`)

module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));
  client.on('interactionCreate', interaction => {
    if (interaction.componentType != "BUTTON") {
     reqEvent('interactionCreate')(client, interaction)
    } else {
     reqEvent('buttonInteraction')(client, interaction)
    }
  });
};
