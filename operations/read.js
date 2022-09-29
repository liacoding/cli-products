import { createRequire } from 'module'
const require = createRequire(import.meta.url);

import { readDatabase } from '../data/import_db.js';
const { Sequelize } = require('sequelize');

// const dbconfig = require('../data/db.config');
import { dbconfig } from '../data/db.config.js';

// make a Sequelize instance
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    HOST: dbconfig.HOST,
    dialect: dbconfig.dialect
})

// change to connect to actual database to get all products
let products = readDatabase("./data/db.txt");

// read info on ONE product, by its ID
// build a FUNCTION that can be called by other parts of your program, when you need info on a product

export function getProductById(id) {
    var product_match = false;
    for(let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            product_match = true;
            return products[i];
        }
    }
    if(!product_match) {
        return {};
    }
}



// read info on ALL products
export async function getAllProducts() {
    try {
        const [results, metadata] = await sequelize.query("SELECT * FROM products;")
        console.log(results);
    }
    catch(error) {
        console.log("error connecting to database: " + error);
    }
    return products;
}