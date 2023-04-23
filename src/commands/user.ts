import { CommandInteraction, Client, ApplicationCommandType, GuildMember, APIInteractionGuildMember } from "discord.js";
import { Command } from "../command";

const command: Command = {
    name: 'user',
    description: "Fournis des informations sur l'utilisateur de la commande",
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

        let content = `Cette commande a été utilisé par ${interaction.user.username}, et a rejoint le serveur aà cette date : ${joinedAtString}.`;
        await interaction.reply({ content, ephemeral: true });
    }
}

export default command; 