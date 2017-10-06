//Zad. 1 Stwórz tablicę z 12 liczbami od 0 do 11 i wypisz ją w konsoli.

var myTab = [];

for (var i = 0; i < 12; i++) {
  myTab.push(i);
}
console.log(myTab);

//Zad 2. Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-10.
//Wylosuj liczby za pomocą Math.random().
//Następnie wypisz **ile jest liczb** w tej tablicy, które się powtarzają.
//Np:
// var arr1 = [4, 8, 1, 2, 1, 4, 5, 8, 1, 3 ];
// Wynik w consoli: 3 // powtarzają się 4, 8 i 1

var myTab1 = [];

for (var i = 1; i<=10; i++) {
  myTab1.push(Math.ceil(Math.random() * (10 - 1) + 1));
}
  console.log(myTab1);

var counter = 0;
var repNumbers = [];

   for (var j = 1; j <=10; j++) {
       if (myTab[i] === j) {
         counter ++;
         //myTab[j] = myTab1[j];
         }
       }
  console.log(counter)
 //console.log("Powatarza się " + counter + "liczb i są to: " + repNumbers[j]);


var tab3 = [];
for(var i=0; i<10; i++) {
  tab3.push(Math.ceil(Math.random() * (10 - 1) + 1)); //math.ceil, żeby zaokrąglić losowe liczby, żeby było większe prawdopodobieństwo powtórzenia się
}
console.log(tab3); //wypisuje wszystkie elementy tablicy

var counter = 0; //zmienna ktora będzie liczyć ile razy liczba będzie się powtarzac
var liczby = []; //tablica z liczbami powtarzającymi się

for(var j=0; j<tab3.length; j++) {
if(tab3.indexOf(tab3[j], j + 1) > -1 && liczby.indexOf(liczby[j] == -1)) { //to -1 zabezpiecza nas przed policzeniem po raz drugi ilości powtorzeń, jeśli jedna liczba pojawi się więcej niż 2 razy
console.log(tab3[j]);
liczby.push(tab3[j]); //dodaje do pustej tablicy lczby, które się powtarzają
counter++;
}
}
console.log("w sumie: " + counter);

//indexOf zwraca index liczby, o którą pytamy, jeśli tego elementu nie ma, to zwraca: -1
//PRZEANALIZOWAĆ, ZROBIĆ ZA POMOCĄ PĘTLI ZALEŻNYCH, ZROBIĆ ZA POMOCĄ INDEX.OF I LASTINDEX.OF ALBO JESZCZE PROŚCIEJ

//zadanie poniżej - liczba znaków każdego wyrazu
//podzielić string wg spacji
//użyć metody dla stringów: zmienna.split(), stworzyć nową var tablicaSlow = zmienna.split();
//sprawdzić ile mają liter słowa - za pomocą length
//

//Na podstawie dowolnego stringa, stwórz tablicę, której elementami będą słowa rozdzielone spacją.
// Następnie wypisz liczbę znaków każdego wyrazu.
// var string =  "My name is Bond, James Bond";
// Wynik w konsoli: 2, 4, 2, 4, 5, 4*/

mojString = "My name is Bond, James Bond";
var tablicaSlow = mojString.split(" ");
console.log(tablicaSlow.length);

for(var i=0; i<tablicaSlow.length; i++) {
  if(tablicaSlow[i].inexOf(",")) {
  tablicaSlow[i] = tablicaSlow[i] -1;
  }
  console.log(tablicaSlow[i].length);
}
//niedokończone...
//stwórz tablicę wieloelementową szybko
var tab2 = [];
for (var i=0; i<12; i++){
  tab2.push(i); //push dodaje kolejny element na końcu tablicy
}

//wypisywanie wartości z tablicy
for(var i=0; i<tab2.length; i++) {
  console.log("Pod i " + i + "znajduje się wartość " + tab2.length[i]);
}
/*var tab1 = [7, 5, 8, 3, 5, 1, 8, "asdf"];
for(var i=0; i<tab1.length; i++) {
  console.log("Pod i " + i + "znajduje się wartość " + tab1.length[i]);
}
*/
//tablice zadanie drugie z wykładowcą
//stworzyć tablicę za pomocą pętli
//
