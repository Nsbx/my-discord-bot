import * as fs from "node:fs";
import * as path from "node:path";

import { Command } from "./command";

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

const commands: Command[] = [];

commandFiles.forEach(async (file) => {
    const filePath = path.join(commandsPath, file);
	const command = await import (filePath);
	
    commands.push(command.default);
});

export const Commands: Command[] = commands; 