// take details of new Product (as a JS object), turn them into a string, then append that string to our db.txt file
import fs from 'fs';



export function createProduct(fake) {
    // append new product to db.txt
    fs.appendFile('./data/db.txt', "\n" + JSON.stringify(fake), null, function() {})
}