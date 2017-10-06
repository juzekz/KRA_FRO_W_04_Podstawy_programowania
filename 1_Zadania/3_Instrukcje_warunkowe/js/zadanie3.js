/*Niektórzy ludzie wierzą, że rok życia ludzkiego to siedem lat przeżytych przez psa.
Stwórz zmienną ```menAge```, która będzie przetrzymywała wiek dowolnej osoby oraz zmienną
 ```pet``` przechowującą nazwę jakiegoś domowego zwierzaka np. "pies" lub "kot".
Następnie za pomocą znanej Ci instrukcji warunkowej sprawdź jakiego zwierzaka
wybrał użytkownik i w przypadku jeśli to jest pies oblicz ile ma lat względem człowieka.
*/


var manAge = 5;
pet = "pies";

if (pet === "pies") {
  console.log("Ten pies ma, licząc w ludzkich latach, " + manAge * 7 + " lat");

} else {
  console.log("To nie jest pies");
}

//albo tak:

pet === "pies" ? console.log("Ten pies ma, licząc w ludzkich latach, " + manAge * 7 + " lat") : console.log("To nie jest pies");
