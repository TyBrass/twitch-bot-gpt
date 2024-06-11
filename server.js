const tmi = require("tmi.js");

const client = new tmi.Client({
    connection: {
        reconnect: true,
    },
    channels: ["a_blind_ty"],
    identity: {
        username: "a_blind_ty",
        password: process.env.TWITCH_OAUTH_TOKEN,
    },
});

client.connect();

client.on("message", (channel, tags, message, self) => {
    console.log(`${tags["display-name"]}: ${message} in ${channel}`);
});
