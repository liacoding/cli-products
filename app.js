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

prompt.start();

console.log("Enter A to see all products; enter I to see individual product details");

prompt.get(['operation'], function (err, result) {
  switch(result.operation) {
    case "A":
      console.log(getAllProducts())
    case "I":
      prompt.get(['id'], function (err, result) {
        var product = getProductById(result.id);
        console.log(product);
      });
  }
});

