const fs = require('fs');
const cars = fs.readFileSync('./cars.json'.toString());
const carsObj = JSON.parse(cars);
// console.log(carsObj);
const years = process.argv[2];


const yearInRange = years => {
  let range = years.split('-');
  let min = range[0]*1;
  let max = range[1]*1;
  // console.log(min);
  // console.log(max);
  return carsObj.filter(car => min <= car.year && max >= car.year)
  // console.log(range);
}

console.log(yearInRange(years));
