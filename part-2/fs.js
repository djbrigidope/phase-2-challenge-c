/*Write a Node.js script to search for data from a JSON file.

Use the cars.json file provided representing a database of cars in a used car lot. Download the file to your part-2/ folder.

Then write two scripts that can be run using the node command.

searchInYears.js takes one argument (let's call it yearRange), finds all the cars from cars.json which have a year that is within the yearRange, and prints the id, make, model, and year of each matching car. The year range format should follow the format YYYY-YYYY, e.g. 1995-2001.
searchByModel.js takes one argument (let's call it the model), finds all the cars from cars.json who have a model value that exactly matches the model argument, and prints the id, model, year, last_owner, and date_purchased of each matching car.
*/
// const cars = require('./cars.json');
const fs = require('fs');
const cars = fs.readFileSync('./cars.json'.toString());
const carsObj = JSON.parse(cars);
// console.log(carsObj);

const input = process.argv[2];

const modelFinder = model => {
  console.log('Searching file for that ' + model);

  let matchedModel = carsObj.filter(obj => obj.model.toLowerCase() === model.toLowerCase());

  let modelResults = matchedModel.map(obj => ({
    'id': obj.id,
    'make': obj.make,
    'model': obj.model,
    'year': obj.year,
    'vin': obj.vin,
    'last_owner': obj.last_owner,
    'date_purchased': obj.last_owner
  }))
  console.log(modelResults)
};

modelFinder(input)
