// Napisz program liczący sumę wszystkich liczb
// w podanym przedziale od **x** do **y**.
// Użyj do tego obu znanych Ci pętli.
// Np. dla ```x = 5```, ```y = 10``` suma to ```5+6+7+8+9+10=45```

var x = 5;
var y = 10;
var wynik = 0; //ta wartość jest nieważna, jest przypisane 0 tylko po to,
//żeby pokazać programowi, że to będzie liczba
for (var i = x; i <= y; i++) {
  wynik = wynik + i;
}
console.log(wynik);


//opcja 2
var x = 5;
var y = 10;
var wynik = 0;

while (x <= y) {
  wynik += x;
  x++;

}

console.log(wynik);
