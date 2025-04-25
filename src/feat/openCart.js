import * as readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process';
import checkout from './checkout.js';
import homeDisplay from './homeDisplay.js';
import chooseOrder from './chooseOrder.js';
const rl = readline.createInterface({ input, output });

export default function openCart(cart) {
    if (cart.foods.length !== 0 || cart.beverages.length !== 0 || cart.sideDishes.length !== 0 || cart.snacks.length !== 0 || cart.desserts.length !== 0) {
        if (cart.foods.length !== 0) {
            for (let i = 0; i < cart.foods.length; i++) {
                console.log(`item: ${cart.foods[i].name}, harga: Rp. ${cart.foods[i].price}`)
            }
        }
        if (cart.beverages.length !== 0) {
            for (let i = 0; i < cart.beverages.length; i++) {
                console.log(`item: ${cart.beverages[i].name}, harga: Rp. ${cart.beverages[i].price}`)
            }
        }
        if (cart.sideDishes.length !== 0) {
            for (let i = 0; i < cart.sideDishes.length; i++) {
                console.log(`item: ${cart.sideDishes[i].name}, harga: Rp. ${cart.sideDishes[i].price}`)
            }
        }
        if (cart.snacks.length !== 0) {
            for (let i = 0; i < cart.snacks.length; i++) {
                console.log(`item: ${cart.snacks[i].name}, harga: Rp. ${cart.snacks[i].price}`)
            }
        }
        if (cart.desserts.length !== 0) {
            for (let i = 0; i < cart.desserts.length; i++) {
                console.log(`item: ${cart.desserts[i].name}, harga: Rp. ${cart.desserts[i].price}`)
            }
        }
        rl.question('apakah anda ingin melakukan pembayaran? (y/n) ', (answer) => {
            switch (answer) {
                case "y":
                    checkout()
                    break;
                case "n":
                    homeDisplay()
                    break;
                default:
                    console.error(new Error('invalid input'))
                    openCart()
                    break;
            }
        })
    }

    else {
        console.log('keranjang kosong, silakan berbelanja dulu')
        chooseOrder()
    }
}