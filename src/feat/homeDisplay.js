import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';
import homeMenu from '../assets/homeMenu.js';
import objectMenu from '../assets/objectMenu.js';
import chooseOrder from './chooseOrder.js';
const rl = readline.createInterface({ input, output });

const cart = objectMenu.cart

export default function homeDisplay() {
    rl.question(homeMenu, (answer) => {
        switch (answer) {
            case "1":
                chooseOrder(cart)
                break;
            case "2":
                openCart(cart)
                break;
            case "3":
                checkout(cart)
                break;
            case "0":
                rl.on('close', () => {
                    console.log('Terima kasih sudah mampir.')
                })
                rl.close()
                break;
            default:
                console.error(new Error('invalid input'))
                homeDisplay()
                break;
        }
    });
}
