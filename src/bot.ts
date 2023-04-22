import { Client, GatewayIntentBits } from "discord.js";

import ready from "./events/ready";
import interactionCreate from "./events/interactionCreate";
import guildMemberAdd from "./events/guildMemberAdd";
import guildMemberRemove from "./events/guildMemberRemove";

import * as dotenv from 'dotenv'

dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const botToken = process.env.BOT_TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    ]
});

ready(client);
interactionCreate(client);
guildMemberAdd(client);
guildMemberRemove(client);

client.login(botToken);