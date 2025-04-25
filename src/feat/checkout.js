import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';
import homeDisplay from './homeDisplay.js';
import chooseOrder from './chooseOrder.js';
const rl = readline.createInterface({ input, output });

export default function checkout(cart) {
    let total = 0
    if (cart.foods.length !== 0 || cart.beverages.length !== 0 || cart.sideDishes.length !== 0 || cart.snacks.length !== 0 || cart.desserts.length !== 0) {
        if (cart.foods.length !== 0) {
            for (let i = 0; i < cart.foods.length; i++) {
                total += cart.foods[i].price
            }
        }
        if (cart.beverages.length !== 0) {
            for (let i = 0; i < cart.beverages.length; i++) {
                total += cart.beverages[i].price
            }
        }
        if (cart.sideDishes.length !== 0) {
            for (let i = 0; i < cart.sideDishes.length; i++) {
                total += cart.sideDishes[i].price
            }
        }
        if (cart.snacks.length !== 0) {
            for (let i = 0; i < cart.snacks.length; i++) {
                total += cart.snacks[i].price
            }
        }
        if (cart.desserts.length !== 0) {
            for (let i = 0; i < cart.desserts.length; i++) {
                total += cart.desserts[i].price
            }
        }
        rl.question(`total pembayaran anda adalah Rp. ${total}, lakukan pembayaran? (y/n) `, (answer) => {
            switch (answer) {
                case "y":
                    rl.on('close', () => {
                        console.log('Pembayaran diterima. Terima kasih sudah mampir.')
                    })
                    rl.close()
                    break;
                case "n":
                    homeDisplay()
                    break;
                default:
                    console.error(new Error('invalid input'))
                    checkout()
                    break;
            }
        })
    }

    else {
        console.log('belum ada transaksi apapun, silakan berbelanja dulu')
        chooseOrder()
    }
}