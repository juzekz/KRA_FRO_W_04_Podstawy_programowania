/* Ta funkcja nie robi nic sensownego.
*/
function doSomething(number) {
    var numberOfSlides = 10;
    var slideWidth = 400;
    var bar;

    var foo = "Galeria ma" ;
    console.log(foo + numberOfSlides + ' zdjęcia');

    var naj = "naj ";
    for(var i = 1; i <= numberOfSlides; i++) {
      var bar = "Zdjęcie nr " + i + " lubię " + naj + " bardziej";
      console.log(bar)
      naj += " naj";
    }
}
doSomething(15);
