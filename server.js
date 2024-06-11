/* TO DO
2. Process received messages through LLM
3. Obtain stream metadata
4. Obstain stream audio / video (OBS? Twitch API?)
*/

const tmi = require("tmi.js");

const client = new tmi.Client({
    connection: {
        reconnect: true,
    },
    channels: ["a_blind_ty"],
    identity: {
        username: "watta_viewer",
        password: process.env.TWITCH_OAUTH_ACCESS_TOKEN,
    },
});

client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

client.connect();

function onMessageHandler(channel, tags, message, self) {
    if (self) return;

    console.log(`${tags["display-name"]}: ${message} in ${channel}`);
    console.log("All tags:", Object.keys(tags));

    client.say(channel, `@${tags.username}. I think, therefore I am.`);
}

function onConnectedHandler(addr, port) {
    console.log(`Connected. Hello, world!`);
}
