const fs = require('fs');
const cars = fs.readFileSync('./cars.json'.toString());
const carsObj = JSON.parse(cars);
console.log(carsObj);
const years = process.argv[2];


const yearInRange = years => {
  let range = years.split('-');


  console.log(range);
}

yearInRange(years);
// }))
// console.log(modelResults)
// };
//
// modelFinder(input)
// }



// let matchedModel = yearRange
//
// let modelResults = matchedModel.map(obj => ({
// 'id': obj.id,
// 'make': obj.make,
// 'model': obj.model,
// 'year': obj.year,
// 'vin': obj.vin,
// 'last_owner': obj.last_owner,
// 'date_purchased': obj.last_owner
