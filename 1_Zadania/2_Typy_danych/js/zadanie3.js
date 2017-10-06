//Wylosuj liczę z zakresu 5-100 i wypisz ją w konsoli. Skorzystaj ze wzoru:
// Math.random() * (max - min) + min

var max = 100;
var min = 5;
console.log(Math.random() * (max - min) + min); // w nawiasie jest ustalony zakres,
//z jakiego mają być wyszukane liczby, 100 - 5 daje 95, czyli szukalbiśby od 0 do 95, a potrzebujemy
// od 5 do 100, więc dodajemy 5, żeby przesunąć zakres.

//a teraz losujemy liczbę całkowitą z tego zakresu:
max = 100;
min = 5;
console.log(Math.floor(Math.random() * (max - min) + min));

//a teraz liczbę całkowitą z zakresu 50 - 5-100
max = 500;
min = 50;
console.log(Math.floor(Math.random() * (max - min) + min));   
