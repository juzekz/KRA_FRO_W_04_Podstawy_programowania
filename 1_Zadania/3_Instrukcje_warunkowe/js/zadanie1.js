// Stwórz dwie zmienne a i b. Do obu przypisz wartości liczbowe.
// Następnie za pomocą instrukcji warunkowej wyisz w konsoli, która z nich jest większa.

var a = 7.8;
var b = 87;
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

console.log(a > b ? a : b); //jeśli a > b to jest a, jeśli nie, to jest b


//drugi sposób:
var a = 7.8;
var b = 87;
console.log(a > b ? a : b);
