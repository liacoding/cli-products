import { createRequire } from 'module'
const require = createRequire(import.meta.url);
var prompt = require('prompt');

import { readDatabase } from '../data/import_db.js';
import { getProductById } from './read.js';

import fs from 'fs';
import { removeProductById } from './delete.js';

let products = readDatabase("./data/db.txt");

export function updateProductById(id) {
    let currentProduct = getProductById(id);
     
    console.log("Details for product id " + id + ":");
    console.log("Price: " + currentProduct.price);
    console.log("SKU: " + currentProduct.sku);
    console.log("Name: " + currentProduct.name);
    console.log("Quantity: " + currentProduct.quantity);
    console.log("Description: " + currentProduct.description);
    
    console.log("Enter the new product");
    prompt.get(['price', 'sku', 'name', 'quantity', 'description'], function (err, result) {
    
     let product = {
            
            price : (result.price == "") ? currentProduct.price : Number(result.price),
            sku : (result.sku == "") ? currentProduct.sku : Number(result.sku),
            name : (result.name == "") ? currentProduct.name : result.name,
            quantity : (result.quantity == "") ? currentProduct.quantity : Number(result.quantity),
            description: (result.description == "") ? currentProduct.description : result.description
   };

   // deleting the product from in-memory collection
   let updatedProducts = removeProductById(id);

   return updatedProducts;
        
    })

  }