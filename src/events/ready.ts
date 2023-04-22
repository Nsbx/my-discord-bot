import { Client, Events } from "discord.js";
import { green, underline } from "colorette"
import { Commands } from "../commands";

export default (client: Client): void => {
    client.once(Events.ClientReady, async (client) => {
        let guilds = await client.guilds.fetch();

        guilds.forEach(async (guildData) => {
            let guild = await guildData.fetch();
            await guild.commands.set([]);
        })

        await client.application.commands.set(Commands);
        console.log(`${Commands.length} commands imported.`)

        let botUsername = client.user.tag;
        console.log(`"${underline(botUsername)}" ${green("is online")}`);
    });
}; 