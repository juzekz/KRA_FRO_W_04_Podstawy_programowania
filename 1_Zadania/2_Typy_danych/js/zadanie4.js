// Mając do dyspozycji dwie zmienne
// var widthBox = "23px";
// oraz
// var widthPanel = "2px";
// dodaj je, a wynik wypisz w konsoli.


var widthBox = "23px";
var widthPanel = "2px";
console.log(parseInt(widthBox) + parseInt(widthPanel) + "px"); // tu metoda
//domyślnie stosuje system dziesiętny

//albo

var widthBox = "23px";
var widthPanel = "2px";
var wynik = parseInt(widthBox, 10) + parseInt(widthPanel, 10); //tu wynik jest
//przypisany do osobnej zmiennej wynik, a metodzie podany jest parametr, w jakim systemie
//liczbowym ma wyświetlić liczbę
console.log(wynik + ' px');
