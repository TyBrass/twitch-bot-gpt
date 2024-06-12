# watta_viewer

Twitch chatbot powered by GPT-4o

Hosted on Heroku

## Next Steps

### Bot

-   Train/fine-tune: https://platform.openai.com/docs/api-reference/fine-tuning/create
-   Join based on database channels

### Web Frontend - Registration, Controls/Preferences

-   Web app
-   Users can register their channel to use the app - while registered,
    Watta watches the channel
    -   Watta can be enabled/disabled in-chat or in-dashboard without cancelling subscription
    -   Watta can be canelled in frontend, removing channel from Watta's list
-   Dashboard presents watta controls: suggested questions for Watta, Watta behaviour options, Watta frequency
-   When a user registers or deregisters, the frontend updates the database holding the list of registered channels
-   ? How should Watta watch that database? Polling? Or does an update also trigger a callback of sorts in the bot script?

### OBS Studio Plugin (will this also work for Streamlabs?) \*FUTURE

-   On starting a stream, also feed video and audio to web server
-   Video/audio are integrated into GPT-4o inputs
    -   Probably some finagling on the server to get this done - need to group the inputs

## To-Do

1. Tweak model so it's chill
2. Obtain stream metadata
3. Obstain stream audio / video (OBS? Twitch API?)
4. Stop using twitchdeveloper.com (or whatever) sample access tokens – set up
   actual OAuth flow
5. It shouldn't respond to EVERY message – need osme logic to prevent spamming
   but also to determine when to send messages unprompted
