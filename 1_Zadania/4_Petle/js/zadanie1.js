// Napisz program, który na podstawie wartości zmiennej **n**
// wypisuje wszystkie liczby od zera do **n**.
// Przy każdej liczbie program ma napisać, czy  liczba jest parzysta czy nie. Np.:
// 0 – parzysta
// 1 – nieparzysta
// 2 – parzysta
// 3 – nieparzysta

var n = 6;
var wynik = 0; // albo var wynik (to mogałby być też po prostu zmienna tylko zadeklarowana
//bez żadnej wartości przypisanej)
for (var i = 0; i <= n; i++) {
  if (i % 2 == 0) { // i to jest ta zmieniająca się nam liczba od 0 do wartości n
    console.log(wynik = i + " - parzysta");
  } else {
    console.log(wynik = i + " - nieparzysta");
  }
}


//albo tak:
for (var i = 0; i <= n; i++) {
  i % 2 === 0 ? console.log(wynik = i + " - parzysta") : console.log(wynik = i + " - nieparzysta");
}
