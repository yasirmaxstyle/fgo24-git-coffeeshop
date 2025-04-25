import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';
import asciiArt from './assets/ascii.js';
import homeDisplay from './feat/homeDisplay.js';

const rl = readline.createInterface({ input, output });

export default function orderApp() {
    rl.question(asciiArt, homeDisplay)
}

orderApp()