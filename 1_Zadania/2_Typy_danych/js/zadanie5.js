/*Zapisz do zmiennej ```mail```, dowolny adres email. Następnie za pomocą
odpowiedniej metody dla stringów sprawdź czy znajduje się w nim znak @.*/

var mail = "yushyushdesigngmail.com";

if (mail.indexOf("@") > -1) {
  console.log("W tym stringu znajduje się znak '@'");
} else {
  console.log("W tym stringu nie ma znaku '@'");
}

//drugi sposob

var mail = "juzekzpoczta.onet.pl";
mail.indexOf("@")>-1 ? console.log("Wszystko ok, w tym adresie mailowym nie zabrakło małpy") : console.log("Sorki, czegoś tu brak");
