/*Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-60.
Wylosuj liczby za pomocą Math.random(). Następnie sprawdź każdą liczbę
w tablicy i zmodyfikuj tak, aby była parzysta. Przykład:

Przykładowa tablica:  [4, 55, 17, 22, 1, 43, 53, 11, 9, 20];
Zmodyfikowana tablica: [4, 56, 18, 22, 2, 44, 54, 12, 10, 20];*/

var tab = [];
for(var i=0; i<10; i++) {
  tab.push(Math.ceil( Math.random() * (60 - 1) + 1))
  }
console.log(tab);
for(var i=0; i<tab.length; i++) {
  if(tab[i]%2 != 0) {
    tab[i] = tab[i]+1;
  }
}
console.log(tab);
