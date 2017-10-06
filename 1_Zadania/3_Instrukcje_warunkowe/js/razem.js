// Wylosuj liczbę z zakresu 1 - 100 i zapisz do zmiennej.
// Następnie sprawdź za pomocą instrukcji warunkowej
// czy liczba jest większa od 50
// jeśli tak to wypisz w konsoli "Hura",
// w przeciwnym przypadku wypisz "liczba mniejsza niż 50".

var liczba = Math.random() * (100 - 1) +1;

if (liczba > 50) {
  console.log("Hurra");
} else {
  console.log("liczba mniejsza niż 50");
}

//albo tak:

liczba > 50 ? console.log("Hurra") : console.log("liczba mniejsza niż 50");
