console.log("tablice zadanie 1");

/*Stwórz tablicę z dowolnymi liczbami. Następnie oblicz średnią
arytmetyczną z liczb znajdujących się w tej tablicy i wypisz ją w konsoli.

var avg = [4, 4, 1, 2, 5, 40];
Wynik w consoli: 9.333
*/

var avg = [];
for(var i=0; i<10; i++) {
  avg.push(Math.ceil( Math.random() * (10 - 1) + 1)); //tego się nauczyć i zrozumieć!
}
console.log(avg);
var sum = 0;
for(var i=0; i<avg.length; i++) {
  sum = sum + avg[i]; //sum += avg[i];
}
console.log(sum);
 console.log(sum / avg.length);
