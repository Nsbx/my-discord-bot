import { CommandInteraction, ChatInputApplicationCommandData, Client } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    exec: (client: Client, interaction: CommandInteraction) => void;
} 