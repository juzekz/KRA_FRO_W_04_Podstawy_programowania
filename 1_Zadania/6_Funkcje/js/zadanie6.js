// Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument,
//a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
// * wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
// * wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
// * wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
// * wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.
//
// Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki.
//Do wyliczenia pełnych tygodni użyj poniższego kodu:
//
// ```JavaScript
// var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
// ```
//
// Przykład:
// ```JavaScript
// input -> 8
// output -> 1150
// ```

function rentCost(days) {
cost = 0;
  if (days === 1) {
    cost = 200;
  }  else if (days === 2 || days === 3) {
    cost = 180;
  } else if (days >= 4 && days <= 7) {
    cost = 160;
  } else {
    cost = 150;
  }
var totalCost = cost * days;

  var numbersOfWeeks = Math.floor(days / 7);
  var discount = numbersOfWeeks * 50;
  var finalCost = totalCost - discount;

  return finalCost;
  }
days = 8;
  console.log("Szanowny Panie, za pobyt u nas przez " + days + " dni płaci Pan jedyne " + rentCost(8) + " złotych. Dziękujemy za wybranie naszego pensjonatu.");
  
