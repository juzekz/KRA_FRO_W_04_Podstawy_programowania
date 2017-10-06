// Napisz program liczący wartość **x!**, gdzie **!** oznacza silnię, a **x** jest zmienną.
// Użyj do tego obu znanych Ci pętli.
// Silnia to wynik mnożenia wszystkich liczb całkowitych od jeden do podanej liczby, czyli:
// 5! = 1*2*3*4*5 = 120
// 8! = 1*2*3*4*5*6*7*8 = 40320

var silnia = 1; //bo bez sensu liczyć mnożenie od zera
var x = 10; //liczba, dla której chcemy liczyć silnię, czyli do ktorej ma dojść
for (var i=1; i<=x; i++) {
  silnia = silnia * i;
}
console.log(silnia);

//albo tak - to jest przepisane z materiałów od ywkładowcy do omówienia na korkach:
var j = 1; // to nie mogłoby być zdefiniowane tylko w warunku pętli zamiast tu?
var y = 5; //liczba, do której chcemy liczyć silnię
silnia2 = 1; //nie powinno tu być 'var silnia2'? i analogicznie do pierwszego
//przykładu nie powinno to być nad zapisem 'var y'?...

while (j <= y) {
  silnia2 = silnia2 * j; // albo silnia2 *= j;
  j++;
}
console.log("Silnia wyliczona drugim sposobem: " + y + "!: " + silnia2);


/*
### Rysunki w konsoli  (~ 7min - 12min)

Napisz program rysujący na podstawie wartości zmiennej **n**
następujący schemat (tutaj dla ```n = 5```):

```
* * * * *
*       *
*       *
*       *
* * * * *
```

Rozwiąż zadanie za pomocą pętli for i while.*/

var n = 5;
for (var i = 0; i < n; i++) {

  if (i == 0 || i == n - 1) { //gdy to jest pierwsza i ostatnia linijka
    var output = ""; // to jest potrzebne, żeby gwiazdki łączyć w jedną linię - zdefiniuj output, a że potrzebujemy go n razy, to:

    for (var j = 0; j < n; j++) {
      output = output + "*"; //w każdej kolejnej iteracji wynik staje się o jedną gwaizdkę bogatszy
                              //po przejechaniu j mamy całą pierwszą i ostatnią linijkę
    }
    console.log(output);

  } else { //pozostałe linijki
    var output = "";

    for (var j = 0; j < n; j++) {

      if (j == 0 || j == n - 1) { //jeśli jesteśmy w pierwszym i osatnim znaku linii
        output = output + "*"; //dodajemy gwizdkę

      } else {
        output = output + " "; // jeśli nie, dodajemy spację
      }
    }
    console.log(output);
  }
}

 
