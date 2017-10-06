// wymyślić nazwe, 3 argumnety, return, warunek z dwoma elsami

//wywołanie: największa(1,2,3);
//Napisz funkcję, która przyjmuje jako argumenty trzy liczby
// i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie).Wypisać
// możesz dopiero jak zwrócisz wynik z funkcji.
function Three(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
console.log(Three(2, 5, 78));

//opcja 2
function Three2(num4, num5, num6) {
var max = 0;
if (num4 > num5 && num4 > num6) {
  max = num4;
} else if (num5 > num6) {
  max = num5;
} else {
  max = num6;
}
return max; // nie można poza funcją wywołać zmiennej zdefiniowanej wewnątrz funkcji, dlatego console.log nie może zawierać samego maxa
}
var output = Three2(45, 7, 509);
console.log(output);
