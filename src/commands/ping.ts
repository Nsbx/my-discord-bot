import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../command";

const command: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
    type: ApplicationCommandType.ChatInput,
    exec: async (client: Client, interaction: CommandInteraction) => {
        let startTime = new Date();
        await interaction.reply({ content: 'Pong!', ephemeral: true });

        let endTime = new Date();
        let timeDiff: number = endTime.getTime() - startTime.getTime(); //in ms
        await interaction.editReply({ content: `Pong! ${timeDiff}ms`});
    }
}

export default command; 