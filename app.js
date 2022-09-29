/*
purpose of our application:
Allow a user to create, read, edit and delete products from a collection of products
We will prompt a user for the desired operation, and then perform it

what "concerns" will we have?

1. Data access 
2. UI concerns (prompting user for input; presenting output)
3. Create/Edit/Delete data


*/
import { createRequire } from 'module'
const require = createRequire(import.meta.url);


var prompt = require('prompt');

import { getProductById, getAllProducts } from "./operations/read.js";
import { removeProductById } from './operations/delete.js';
import { createProduct } from './operations/create.js';
import { updateProductById } from './operations/update.js';
import { updateDatabase } from './data/update_db.js';

prompt.start();

console.log("Pick from the following operations:");
console.log("A: list all products");
console.log("I: find product by id")
console.log("D: delete product by ID");
console.log("C: create a new product");
console.log("U: update a product by id");

prompt.get(['operation'], function (err, result) {
  switch(result.operation) {
    case "A":
      console.log(getAllProducts())
      break;
    case "I":
      prompt.get(['id'], function (err, result) {
        var product = getProductById(result.id);
        console.log(product);
      });
      break;
    case "D":
      prompt.get(['id'], function (err, result) {
        // remove product from in-memory array
        var updatedProducts = removeProductById(result.id);
        // update the database
        updateDatabase(updatedProducts);

        console.log(updatedProducts);
      });
      break;
      case "C":
        prompt.get(['price', 'sku', 'name', 'quantity', 'description'], function (err, result) {
          let product = {
                 
                 price : Number(result.price),
                 sku : Number(result.sku),
                 name : result.name,
                 quantity : Number(result.quantity),
                 description:result.description
             // use the user input to create this new Product object that we are going to pass into the createProduct()
        };
  
         var result = createProduct(product);
          console.log(product);
        });
        break;
      
      case "U":
        let updatedProducts = [];
        prompt.get(['id'], function (err, result) {
        
        updatedProducts = updateProductById(result.id);
        
        });
        updateDatabase(updatedProducts);
        console.log(updatedProducts);
        break;
  }
});

