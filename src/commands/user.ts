import { CommandInteraction, Client, ApplicationCommandType, GuildMember, APIInteractionGuildMember } from "discord.js";
import { Command } from "../command";

const command: Command = {
    name: 'user',
    description: 'Provides information about the user.',
    type: ApplicationCommandType.ChatInput,
    exec: async (client: Client, interaction: CommandInteraction) => {
        let guildMember = interaction.member;

        if (!(guildMember instanceof GuildMember)) {
            return;
        }

        if (guildMember.joinedAt === null) {
            return;
        }

        let joinedAtDate = guildMember.joinedAt;
        let joinedAtString = joinedAtDate.toLocaleDateString(interaction.locale)

        let content = `This command was run by ${interaction.user.username}, who joined on ${joinedAtString}.`;
        await interaction.reply({ content, ephemeral: true });
    }
}

export default command; 