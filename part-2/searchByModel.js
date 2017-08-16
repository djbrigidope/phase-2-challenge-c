
const fs = require('fs');
const cars = fs.readFileSync('./cars.json'.toString());
const carsObj = JSON.parse(cars);

const input = process.argv[2];

const modelFinder = model => {
  console.log('Finding cars under model: ' + model);

  let matchedModel = carsObj.filter(obj => obj.model.toLowerCase() === model.toLowerCase());
  console.log(matchedModel);
  let type = matchedModel.map(obj => ({
    'id': obj.id,
    'make': obj.make,
    'model': obj.model,
    'year': obj.year,
    'vin': obj.vin,
    'last_owner': obj.last_owner,
    'date_purchased': obj.last_owner
  }))
  console.log(type)
};

modelFinder(input)
