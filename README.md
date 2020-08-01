# discord-stock-bot

Discord Bot for displaying stock market information.

## Getting Started

Install Node.js 12+ following the instructions at https://nodejs.org/en/.

Install dependencies:

```shell
npm install
```

Add environment variables to `.env` file (this file is NOT commited):

```ini
API_KEY=somekey
DISCORD_TOKEN=botdiscordtoken
```

Run program in dev mode:

```shell
npm run dev
```

Or run the "Debug Application" VS Code launch configuration. Note that this depends on [nodemon](https://nodemon.io/) installed globally.

Run tests:

```shell
npm test
```
