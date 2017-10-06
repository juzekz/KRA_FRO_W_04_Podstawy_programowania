var string = "Justyna";
console.log(typeof string);

var number = 24;
console.log(typeof number);

var unDefined = undefined;
console.log(typeof unDefined);

var noNumber = NaN;           //tu konsola wyświetla number - dlaczego?
console.log(typeof noNumber);

var boolean = true;
console.log(typeof boolean);

console.log("dodawanie zmiennych");

var sum1 = string + number;
console.log(typeof sum1);
//*konsola wyświetla typ string

var sum2 = number + unDefined;
console.log(typeof sum2);
//*konsola wyświetla typ number

var sum3 = boolean + string;
console.log(typeof sum3);
//*konsola wyświetla typ string


//String + number
var text = "Ala ma kota";
var number = 87;

var resultAddTextToNumber = text + number;
console.log(typeof resultAddTextToNumber);
// Wynik: Ala ma kota87 -> String
