import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionData, ApplicationCommandOptionType } from "discord.js";
import { Command } from "../command";

let diceCountOption: ApplicationCommandOptionData = {
    name: 'dice_count',
    description: 'Number of dice',
    type: ApplicationCommandOptionType.Integer,
    min_value: 1,
    maxValue: 20,
    required: true
};

let diceFacesOption: ApplicationCommandOptionData = {
    name: 'dice_faces',
    description: 'Number of dice faces',
    type: ApplicationCommandOptionType.Integer,
    min_value: 2,
    maxValue: 1000,
    required: true
};

const command: Command = {
    name: 'roll',
    description: 'Replies with dice roll!',
    type: ApplicationCommandType.ChatInput,
    options: [
        diceCountOption,
        diceFacesOption
    ],
    exec: async (client: Client, interaction: CommandInteraction) => {
        let diceCountOption = interaction.options.get('dice_count');
        let diceFacesOption = interaction.options.get('dice_faces');

        if (diceCountOption === null || diceFacesOption === null) {
            return;
        }

        let diceCount: number = typeof diceCountOption.value === 'number' ? diceCountOption.value : 1;
        let diceFaces: number = typeof diceFacesOption.value === 'number' ? diceFacesOption.value : 2;

        if (diceCount === undefined || diceFaces === undefined) {
            return;
        }

        let rollType = 'dice';
        if (diceFaces === 2) {
            rollType = 'coin'
        }

        let diceRolls = [];

        for (let i = 0; i !== diceCount; i++) {
            let diceRoll = Math.floor(Math.random() * diceFaces) + (rollType === 'dice' ? 1 : 0);

            diceRolls.push(diceRoll);
        }

        let plural = false
        if (diceCount > 1) {
            plural = true;
        }

        let subject = '';
        let subjectEmoji = '';

        switch (true) {
            case rollType === 'dice':
                subjectEmoji = ':game_die:';
                subject = `dé à ${diceFaces} faces`
                break;
            case rollType === 'coin':
                subjectEmoji = ':coin:';
                subject = `pièce`
                break;
        }

        let rollResult = diceRolls.join(' + ');

        if (diceCount > 1) {
            let diceSum = diceRolls.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            rollResult += ` = ${diceSum}`
        }

        let content = `Résultat pour ${diceCount} lancé${plural ? 's' : ''} de ${subject} : ${rollResult} ${subjectEmoji}`;

        interaction.reply({ content })
    }
}

export default command; 