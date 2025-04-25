import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import orderMenu from '../assets/orderMenu.js';
import chooseItem from './chooseItem.js';
import homeDisplay from './homeDisplay.js';
import objectMenu from '../assets/objectMenu.js';
const rl = readline.createInterface({ input, output });

const item = objectMenu.order;

export default function chooseOrder(cart) {
  rl.question(orderMenu, (answer) => {
    switch (answer) {
    case "1":
      chooseItem(item.foods, cart);
      break;
    case "2":
      chooseItem(item.beverages, cart);
      break;
    case "3":
      chooseItem(item.sideDishes, cart);
      break;
    case "4":
      chooseItem(item.snacks, cart);
      break;
    case "5":
      chooseItem(item.desserts, cart);
      break;
    case "0":
      homeDisplay();
      break;
    default:
      console.error(new Error('invalid input'));
      chooseOrder();
      break;
    }
  });
}