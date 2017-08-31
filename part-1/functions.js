
//funfunfunfunfunfunfun funktionz

const assert = require('assert');

//show day of the weak
 let cals = (d) => {
    let daay = d.getDay();
    switch (daay) {
      case 0:
        return('Sunday');
        break;
      case 1:
        return('Monday');
        break;
      case 2:
        return('Tuesday');
        break;
      case 3:
        return('Wednesday');
        break;
      case 4:
        return('Thursday');
        break;
      case 5:
        return('Friday');
        break;
      case 6:
        return('Saturday');
        break;
      default:
        return('put daet');
    }
};
console.log(cals(new Date(2017, 11, 31)));
console.log(cals(new Date(2017, 08, 19)));



// capitolize every 4th letter

loop through array, modulous index by 4. then toUpperCase dat bih

function capitalizeFourth () {
  
}






capitalizeFourth("Eenie, Meenie, Miney, Moe") // => "eenIe, MeenIe, MineY, mOe"
capitalizeFourth("ABRACADABRA") // => "abrAcadAbra"
//whew



//write a function `getValues(obj)` that returns
// all the values for an object. ignore symbolic properties & count only 'own properies'





//write a function that takes an array of strings, a lower value,
// and an upper value It returns a new array containing _only_ the elements from the source `array` that come before `lower` alphabetically and after `upper`. The elements in the returned array should be in the same order as the source array.
