const cars = require('./cars.json');
const input = process.argv[2];

const modelFinder = function (model) {
  console.log('Searching file for that ' + model);

  // let matchedModel = cars.filter(obj => obj.model.tolowerCase() === model.tolowerCase());
  //
  // let modelResults = matchedModel.map(obj => ({
  //   'id': obj.id,
  //   'make': obj.make,
  //   'model': obj.model,
  //   'year': obj.year,
  //   'vin': obj.vin,
  //   'last_owner': obj.last_owner,
  //   'date_purchased': obj.last_owner
  // }))
  // console.log(modelResults)
};

// modelFinder(input)
