# watta_viewer

Twitch chatbot powered by GPT-4o

Currently very, very basic - just responds to chat messages in a very generic way

## Next Steps

### Bot

-   Obtain stream metadata (Twitch API)
-   Set up proper OAuth flow, and redirection URI
-   Fine-tune model
-   Messaging logic (currently responds to every chat message). Need to determine which messages warrant a response, and how often to send messages unprompted

### Web Frontend

-   Web app for registration and controls/preferences
-   Users can register their channel to use the app - while registered,
    Watta watches the channel
    -   Watta can be enabled/disabled in-chat or in-dashboard without cancelling subscription
    -   Watta can be canelled in frontend, removing channel from Watta's list
-   Dashboard presents Watta controls: suggested questions for Watta, Watta behaviour options, Watta frequency
-   When a user registers or deregisters, the frontend updates the database holding the list of registered channels
    -   User registration/deregistration on the frontend should immediately be reflected in bot
-   A real database, rather than the current JSON object

### OBS Studio Plugin

-   On starting a stream, also feed video and audio to web server
-   Video/audio are integrated into GPT-4o inputs
    -   Probably some finagling on the server to get this done - need to group the inputs
