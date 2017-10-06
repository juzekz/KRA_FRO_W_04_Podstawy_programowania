// && || rozrysować wszystkie kombinacje żeby ułozyć warunek

// Napisz funkcję ```rockPaperScissors(player1, player2)```,
// która będzie pobierać dwa napisy
// i na ich podstawie zwracać informacje, kto wygrał.
// Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.
//
// Funkcja ma zwracać jeden z czterech napisów:
// * "Gracz 1 wygrał",
// * "Gracz 2 wygrał",
// * "Remis",
// * "Błędne informacje".
//
// Przykład:
// ```JavaScrit
// input -> "papier", "nozyce"
// output -> "Gracz 2 wygrał"
// ```
// w tym zadaniu jest błąd, bo w tej grze wygrywa papier, dlatego, jesli gracz 1 pokazał papier, to jest zwycięzcą.
function rockPaperScissors(player1, player2) {

if (player1 === "papier" && player2 != "papier") {
  output = "Gracz 1 wygrał";
} else if (player1 === "papier" && player2 === "papier") {
  output = "Remis";
} else if (player1 === "kamień" && player2 === "nożyce") {
  output = "Gracz 1 wygrał";
} else if (player1 === "kamień" && player2 === "kamień") {
  output = "Remis";
} else if (player1 === "nożyce" && player2 != "nożyce") {
  output = "Gracz 2 wygrał";
} else if (player1 === "nożyce" && player2 === "nożyce") {
  output = "Remis";
} else if (player1 != "papier" || player1 != "nożyce" || player1 != "kamień" || player2 != "papier" || player2 != "nożyce" || player2 != "kamień")
  output = "Błędne informacje";

  return output;
}

console.log(rockPaperScissors("papier", "nożyce"));
// if w ifie czyli sprawdzam player 1 i wszystkie 3 opcje playera 2

//zrobiłam błędne założenie, że papier zawsze wygrywa ;p//
