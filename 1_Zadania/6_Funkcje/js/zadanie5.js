//nazwa zmiennej = function()
//pętla for

//jeśli przypisuję funkcję do zmiennej, to nie ma ona własnej nazwy i jest
//anonimowa i zmienna ta działa jak funkcja

//Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest
//wypisanie dziesięć razy: "Gdy piszę kod zawszę i wszędzie używam funkcji
//oraz nie tworzę zmiennych globalnych".

var anonim = function() {
var i = 0; //w pętli while zmienną licznikową definiujemy przed rozpoczęciem pętli
  while (i < 10) {
    console.log("Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych");
    i++;
  }
};
//cały przepis na funkcję jest od razu przypisany do zmiennej
anonim(); //żeby wywołać, trzeba użyć nazwy zmiennej jak nazwy funkcji przy jej wywoływaniu, czyli z nawiasem
