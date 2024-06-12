const OpenAI = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
const tmi = require("tmi.js");
const database = require("./db");

const client = new tmi.Client({
    connection: {
        reconnect: true,
    },
    // __could be broken__
    channels: database.channels.map((channel) => channel.name),
    identity: {
        username: "watta_viewer",
        password: process.env.TWITCH_OAUTH_ACCESS_TOKEN,
    },
});

function onMessageHandler(channel, tags, message, self) {
    if (self) return;

    console.log(`${tags["display-name"]}: ${message} in ${channel}`);
    console.log("All tags:", Object.keys(tags));

    if (message.toLowerCase().includes("watta")) {
        openai.chat.completions
            .create({
                messages: [{ role: "user", content: message }],
                model: "gpt-4o",
            })
            .then((response) =>
                client.say(
                    channel,
                    `@${tags.username}, ${response.choices[0].message.content}`
                )
            );
    }
}

function onConnectedHandler(addr, port) {
    console.log(`Online...`);

    // Get client ID
    // const metadata = fetch(`https://api.twitch.tv/helix/channels?broadcaster_id=${}`)
}

const runBot = () => {
    client.on("message", onMessageHandler);
    client.on("connected", onConnectedHandler);
    client.connect();
};

module.exports = runBot;
