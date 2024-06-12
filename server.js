/* TO DO
1. Tweak model so it's chill
3. Obtain stream metadata
4. Obstain stream audio / video (OBS? Twitch API?)
5. Stop using twitchdeveloper.com (or whatever) sample access tokens – set up 
   actual OAuth flow
6. It shouldn't respond to EVERY message – need osme logic to prevent spamming
   but also to determine when to send messages unprompted
*/

const OpenAI = require("openai");
const openai = new OpenAI(process.env.OPENAI_API_KEY);
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
    console.log(`Connected. Hello, world!`);
}
