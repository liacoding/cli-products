import { readDatabase } from '../data/import_db.js';
import fs from 'fs';

let products = readDatabase("./data/db.txt");

export function removeProductById(id) {
    let product_match = false;
    let tempArray = products;

    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            product_match = true;
            tempArray.splice(i, 1);
            fs.writeFile('./data/db.txt', '', null, function() {});
            for(let i = 0; i < tempArray.length; i++) {
                // for each item convert to json string then write that string to db.txt
                let obj = JSON.stringify(tempArray[i]);
                fs.appendFile("./data/db.txt", obj+"\n", err => {if(err) console.error(err)})
            }

            products = tempArray;
            return products;
        }
    }
}