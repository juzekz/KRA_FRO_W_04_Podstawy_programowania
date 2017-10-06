// wywołaniefunkcji suma: var razem = suma([1,2,3]);
//potrzebna pętla, potrzebna zmienna suma

// Stwórz funkcję, która **będzie zwracała** (poprzez ```return```)
// sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.
//
// Przykład:
// ```JavaScript
// input -> [1,2,3]
// output -> 6
// ```

function Sum(tab1) {
  var output = 0;
  for (var i = 0; i < tab1.length; i++) {
    output += tab1[i];
  }
  return output;
}
var arr = [34, 567, 1456, 68, 47];
console.log(Sum(arr));
//albo:
console.log(Sum([5, 4, 8, 5]))
