/*//przykład
function dodawanie(liczba1, liczba2) {
  return liczba1+liczba2;
}
var suma = dodawanie(5.2);
console.log(dodawanie(5.2));

//przykład 2
function mniejsza(liczba1, liczba2);
var mniejsza //lepiej zamiast return w środku tu powołać zmienną i ją wywołać na końcu
  //return liczba1;
if(liczba1<liczba2) {
  mniejsza = liczba1;
} else {
  mniejsza = liczba2;
}
  }
  return mniejsza;

mniejsza(1,2); {}

//albo zamiast ifa:
return liczba1<liczba2 ? liczba1 : liczba2;
*/
//zadanie 1 z wykładowcą
function fooBar(liczba) {
  var wynik = "";

for(var i=1; i<=15; i++) {
  if(i%3 == 0 && i%5 == 0) {
    wynik += "FOOBAR";
  }
    else if(i%5 == 0) {
      wynik += "Bar";
    }
  else if (i%3 == 0) {
    wynik += "Foo";
  }
  else {wynik += i;}
}
console.log(wynik);
return wynik;
}
//wywołać
//żeby się wyświetlało w jednej linni stworzyć zmienną i do niej doklejać wynik ifów
var ciag = fooBar(15);
console.log(ciag);

//na zadanie zrobić to samo za pomocą switch

//drugie zadanie wspólnie
function potega(a, n) {
var wynik = 1;
for (var i=0; i<=n; i++) {wynik
*= a;
}
  return wynik;
}
console.log(potega(5,2), Math.pow(5,2));
