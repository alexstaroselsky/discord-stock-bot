// Load environment variables
require('dotenv').config();

const client = require('./clients/discord');
const { getLatestPrice } = require('./services/api');

const prefix = '!stockbot';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'latestprice') {
    // First argument should be symbol
    const symbol = args[0];

    // Error if no symbol provided
    if (!symbol) return msg.reply('Please provide a symbol');

    try {
      const latestPrice = await getLatestPrice(symbol);
      msg.reply(latestPrice);
    } catch (error) {
      msg.reply('An error occurred with the request');
    }
  } else {
    msg.reply('No command provided');
  }
});

client.login(process.env.DISCORD_TOKEN);
