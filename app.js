// Mostrar RATING
// mostrar una estrella por cada valor entero y un punto(.) por cada valor medio

function showRating(num1) {
  let rating = "";
  for (let i = 0; i < Math.trunc(num1); i++) {
    rating += "*"
    if (i !== Math.trunc(num1) - 1) {
        rating += " "
    }
  }
  if (num1 - Math.trunc(num1) >= 0.5) {  //tambien se puede usar la formula !Number.isInteger(num1)
    rating += " .";
  }
  return rating;
}

console.log(showRating(5.5));

// FILTRAR PRECIOS DE MENOR A MAYOR, CON UN ARRAY DADO usando .sort()

function sortLowToHigh(arr) {
    return arr.sort( (a,b) => a - b)
}

console.log(sortLowToHigh([25, 15, 0, 32, 64, -5, 4, -20]))


//Sorting with FOR LOOP
function sortLowtoHigh2 (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let a = i; a < arr.length; a++) {
            if (arr[a] < arr[i]) {
                let x = arr[a]
                arr[a] = arr [i]
                arr [i] = x
            }
        }
    }
    return arr
}

console.log(sortLowtoHigh2([3, 5, 2, 0, 4, 1]))

