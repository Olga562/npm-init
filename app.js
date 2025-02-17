//global.myVariable = 'Hello Node.js!';

///console.log(global.myVariable);

const maths = require('./math.js');
const upperCase = require('./stringUtils.js');
const currentDate = require('./dateUtils.js');

console.log("Summa on " +maths.add(3, 4));
console.log("Erotus on " +maths.subtract(3, 4));
console.log("Tulo on " +maths.multiply(3, 4));
console.log("Osamäärä on " +maths.divide(3, 4));

console.log(upperCase('hello'));

console.log(currentDate());