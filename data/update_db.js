import fs from 'fs';

export function updateDatabase(products) {
    fs.writeFile('./data/db.txt', '', null, function() {});
    for(let i = 0; i < products.length; i++) {
        // for each item convert to json string then write that string to db.txt
        let obj = JSON.stringify(products[i]);
        fs.appendFile("./data/db.txt", obj+"\n", err => {if(err) console.error(err)})
    }
}