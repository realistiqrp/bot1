// Fivem Server Status Discord Bot by Zofux

// DO NOT CHANGE THE CODE, change the config.json

// CODE
const Discord = require('discord.js'); // Defines discord.js
const client = new Discord.Client() // Defines the client / the discord bot
const fivereborn = require('fivereborn-query'); // Defines the npm library we use to get data from our fivem server
const config = require('./config.json'); // Making so we can use the config.json as a config file

client.once('ready', () => { // A function that is run once when the bot is onlince
    console.log('FiveM Bot is Online!') // Sends to the console that the bot is online
})

function activity(){ // Defines the function
    setTimeout(() => { // Starts a loop
        fivereborn.query(config.SERVER_IP, config.SERVER_PORT, (err, data) => { // Starts a function that allowes us to retrive data from our fivem server
            if (err) { // Checks for errors
                return console.log(err); // If a error is true then this will log that error and then stop it from going by
            } else { // If a error is not true then 
                client.user.setActivity(`${data.clients} speler(s)`, { type: "WATCHING" }); // Sets the Status
            }
        });
        activity(); // Runs the function we defined at line 15
    }, 1000); // Waits 1 second
}
activity(); // Runs the function again

client.login(config.BOT_TOKEN) // Loging in to the bot