// funkcja, 2 argumenty, kwota

// Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
// * kwotę do zapłaty,
// * opis słowny obsługi.
// Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku,
// jeśli opis jest nieznany, funkcja powinna zwracać napis "Opis nieczytelny".
//
// Opis może przyjmować następujące wartości:
// "Bardzo dobra obsluga" => 25% napiwku,
// "Dobra obsluga" => 20% napiwku,
// "Srednia obsluga" =>15% napiwku,
// "Zla obsluga" => 0% napiwku.
//
// Przykład:
// ```JavaScrit
// input -> 100, "Bardzo dobra obsluga"
// output -> 25
// ```

function calculateTip(amount, raiting) {
if (raiting == "Bardzo dobra obsługa") {
return (amount / 100) * 25;
}
else if (raiting == "Dobra obsługa") {
  return (amount / 100) * 20;
}
else if (raiting == "Średnia obsługa") {
  return (amount / 100) * 15;
}
else if (raiting == "Zła obsługa") {
  return 0;
}
else {
  return "Opis nieczytelny";
}

}

var tIpp = calculateTip(120, "Bardzo dobra obsluga"); //tutaj podaję argumenty
console.log(tIpp);
