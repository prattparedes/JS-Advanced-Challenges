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


