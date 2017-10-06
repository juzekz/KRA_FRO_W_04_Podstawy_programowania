// Napisz program rysujący na podstawie wartości zmiennej **n**
// następujący schemat (tutaj dla ```n = 5```):
//
// ```
//   *   *
// *   *   *
//   *   *
// *   *   *
//   *   *
// ```
// Użyj do tego pętli zagnieżdżonych,
// a w wewnętrznej pętli dodaj **if** sprawdzający odpowiedni warunek
// (jeżeli ```i + j``` jest nieparzyste, to ma być gwiazdka).
var n = 5;
var output = "";

for (i = 0; i < n; i++) {
  output = ""; //to jest pusta linijka, którą wypełniam wewnętrznym forem i po jednym całym przejściu zewnętrznego - wyświetlam
  for (j = 0; j < n; j++) { //j obsluguje pętlę wewnętrzną
    if ((i + j) % 2 === 0) {
      output += " ";

    } else {
      output += "*";
    }

  }
  console.log(output) //jest przed zamnknięciem zewnętrznego fora
}



//opcja 2:
var n = 5;
var output = "";

for (i = 0; i < n; i++) {
  output = ""; //to jest pusta linijka, którą wypełniam wewnętrznym forem i po jednym całym przejściu zewnętrznego - wyświetlam
  for (j = 0; j < n; j++) { //j obsluguje pętlę wewnętrzną

      (i + j)% 2 === 0 ? output += " " : output += "*";
    }
    console.log(output) //jest przed zamnknięciem zewnętrznego fora
  }
