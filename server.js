const tmi = require("tmi.js");

const client = new tmi.Client({
    connection: {
        reconnect: true,
    },
    channels: ["a_blind_ty"],
    identity: {
        username: "watta_viewer",
        password: process.env.TWITCH_OAUTH_TOKEN,
    },
});

client.connect();

client.on("message", (channel, tags, message, self) => {
    if (self) return;

    // The received message is in the 'message' binding
    // HERE is where we send to GPT, await a response, and then reply
    nextMessage = "Canned response, I'm not thinking straight (yet)";
    // How do we incorporate the ongoing stream video and audio?
    // How do we get the stream metadata (game being played, etc.)?

    console.log(`${tags["display-name"]}: ${message} in ${channel}`);
    console.log("All tags:", Object.keys(tags));
});
