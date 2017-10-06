/*Na podstawie dwóch tablic, wypisz w konsoli elementy, które się
powtarzają w obu tablicach. Załóż, że porównywane tablice są równe. Przykład:

var arr1 = [4, 55, 17, 22, 1];
var  arr2 = [4, 53, 11, 22, 20];

Wynik w consoli: 4,22;*/

var arr1 = [];
for (i = 0; i<5; i++) {
  arr1.push(Math.floor(Math.random() * (55 - 1) + 1)); //wylosowałam liczby calkowite z zakresu od 1 - 55
}
//console.log(arr1);

var  arr2 = [4, 53, 11, 22, 20];
var arrOutput = "";

  for (i = 0; i < arr1.length; i++ ) {

      for (j = 0; j < arr2.length; j++) {

        if (arr1[i] === arr2[j]) {
arrOutput += arr1[i] + " ";// spacja oddziela liczby od siebie
        }
      }
}

console.log("Powtarza się liczba: " + arrOutput);
