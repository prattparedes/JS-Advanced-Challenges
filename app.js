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

//SORT OBJECTS FROM HIGH TO LOW OBJECTS with .sort((a,b) => a-b o b-a)

function sortHighToLow (object1){
    return object1.sort((a, b) => {
        return b.price - a.price
    });
}

console.log(
    sortHighToLow([
        { id: 1, price: 50 },
        { id: 2, price: 120 },
        { id: 3, price: 30 },
    ])
);

//PROMISES
//Video de youtube The Async Await Episode I Promised (Fireship)





//Video de youtube "Async Await Javascript ES7" (Techsith (1.5x speed))




//Video de youtube "Async JS Crash Course - Callbacks, Promises, Async Await" (Travsery Media (1.5x speed)) ((Only if you're still struggling
// with the videos before))

//Pregunta 5, encontrar todos los posts de un solo usuario, usar la api "https://jsonplaceholder.typicode.com/posts"

async function postsByUser(userId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
}


postsByUser(4)
