/** @format */


const Client = require('./src/Structures/Client');   

const config = require('./src/Data/config.json');

const client = new Client();


client.once("ready", function (){
	console.log(`${client.user.username} is online op de server  op de token ${config.token} en prefix ${config.prefix}`)
	client.user.setActivity(`Luistert naar Amstelveen v1` , { type: "PLAYING" })
})

client.login(process.env.token)




