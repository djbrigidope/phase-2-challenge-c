
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


//whew
 }
