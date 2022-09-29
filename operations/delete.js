import { readDatabase } from '../data/import_db.js';
import { updateDatabase } from '../data/update_db.js';

let products = readDatabase("./data/db.txt");

export function removeProductById(id) {
    let tempArray = products;

    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            tempArray.splice(i, 1);

            return tempArray;
        }
    }
}