import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import chooseOrder from './chooseOrder.js';
import homeDisplay from './homeDisplay.js';
const rl = readline.createInterface({ input, output });

export default function chooseItem(input, cart) {
  rl.question(input, (idx) => {
    if (idx > 0 && idx <= input.length) {
      rl.question(`Anda yakin mau membeli ${input[idx - 1].name} seharga Rp. ${input[idx - 1].price}? (y/n) `,
        (answer) => {
          switch (answer) {
          case "y":
            cart.input[cart.input.length] = { name: input[idx - 1].name, price: input[idx - 1].price };
            console.log('Item berhasil ditambahkan ke keranjang');
            rl.question(`Apakah anda ingin membeli lagi? (y/n) `, (answer) => {
              switch (answer) {
              case "y":
                chooseOrder();
                break;
              case "n":
                homeDisplay();
                break;
              default:
                console.error(new Error('invalid input'));
                chooseItem(input);
                break;
              }
            });
            break;
          case "n":
            chooseItem(input);
            break;
          default:
            console.error(new Error('invalid input'));
            chooseItem();
            break;
          }
        });
    }
    else if (idx === "0") chooseOrder();
    else if (idx === "99") homeDisplay();
    else if (idx > input.length && idx < 99) {
      console.error(new Error('menu tidak tersedia'));
      chooseItem(input);
    }
    else {
      console.error(new Error('invalid input'));
      chooseItem(input);
    }
  });
}