import { Client, Events } from "discord.js";
import { green, underline } from "colorette"

export default (client: Client): void => {
    client.on(Events.GuildMemberAdd, async (member) => {
        let systemChannel = member.guild.systemChannel;

        if (systemChannel === null) {
            return;
        }

        await systemChannel.send(`<@${member.user.id}> a rejoint le serveur !`);
    });
}; 