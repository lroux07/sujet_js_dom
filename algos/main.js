// Exercice 1 - à revoir

// function isString(myString) {
//   console.log(typeof myString)
  
//   if(myString === " ") {
//     return true;
//   } else {
//     return false
//   }
// }

// isString("Marc") // true
// isString(2) // false


// Exercice 2

// function greetings(isStudent) {
//   if(isStudent === true) {
//     console.log("Bienvenue cher élève");
//   } else if(isStudent === false) {
//     console.log("Bienvenue cher parent");
//   }
// }

// greetings(true) // Bienvenue cher élève
// greetings(false) // Bienvenue cher parent


// Exercice 3

// function checkWord(word) {
//   if(word.length < 3) {
//     console.log("Ce mot est trop court");
//   } else if(word.length >= 3) {
//     console.log("Le mot" + " " + `${word}` + " " + "est tout à fait correct");
//   }
// }

// checkWord("qw") // Ce mot est trop court
// checkWord("pizza") // Le mot pizza est tout à fait correct


// Exercice 4

// function makeSum(number1, number2) {
//   return number1 + number2;
// }

// console.log(makeSum(2, 3)); // Retourne 5


// Exercice 5
// Je ne sais pas faire

// function makeSumFromArray(numbers) {
//   console.log(numbers); // Retourne 11

//   for(let i = 0; i < numbers; i++) {
//     return makeSumFromArray.some([1, 2, 3, 5]);
//   }
// }

// Exercice 6
// Je ne sais pas faire

// function findOddNumbers(numbers) {
//   for(let i = 0; i < numbers.length; i % 2) {
//     return numbers
//   }
// }

// console.log(findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21])); // [1, 5, 7, 11, 13, 19, 21]


// Exercice 7
// Je ne sais pas faire

// let autre = [];

// function filterArray(myArray) {
//   for(let i = 0; i < myArray.length; i++) {
//     if(myArray[i] === " " || myArray[i] === true || myArray[i] === false) {
//       autre.push(myArray[i]);
//     } else {
//       return myArray;
//     }
//   }
// }

// console.log(filterArray([1, 2, true, "Tom", "Max", false, 4, 5, 6, "John"])); // [1, 2, 4, 5, 6]


// Exercice 8

// function concatString(arrayOfStrings) {
//   for(let i = 0; i < arrayOfStrings.length; i++) {
//     return arrayOfStrings.join("");
//   }
// }

// console.log(concatString(["Un", " ", "code", " ", "de", " ", "qualité"])); // "Un code de qualité"


// Exercice 9
// Je ne sais pas faire

// function findElementByWord(arrayOfStrings, term) {
//   for(let i = 0; i < term.length; i++) {
//     if(term = arrayOfStrings.length) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(findElementByWord(["max", "peter", "john"], "peter")); // true
// console.log(findElementByWord(["max", "peter", "john"], "tom")); // false


// Exercice 10
// Je ne sais pas faire

// function lowerCaseWords(arrayOfStrings) {
//   for(let i = 0; i < arrayOfStrings.length; i++) {
//     return arrayOfStrings.length.toLowerCase()
//   }
// }
// console.log(lowerCaseWords(["uN", " jOLI", " CheVAl ", "BlANc"])); // ["un", " joli", " cheval ", "blanc"]


// Exercice 11
// Je ne sais pas faire

// let all = [];

// function mergeArray(array1, array2) {
//   for(let i = 0; i < array1.length; i++) {
//     all.push(array1);
//   }
//   for(let j = 0; j < array2.length; i++) {
//     all.push(array2);
//   }
// }

// mergeArray([1, 3, 2], [4, 1, 3, 2]) // [1, 3, 2, 4, 1, 3, 2]


// Exercice 12
// Je ne sais pas

// function makeFriends(friends) {
//   for(let i = 0; i < friends.length; i++) {
//     return friends.firstName;
//   }
// }

// const myFriends = [
//     {
//         firstName: "Max",
//         lastName: "Verstappen",
//         age: 27
//     },
//     {
//         firstName: "Lewis",
//         lastName: "Hamilton",
//         age: 37
//     },
//     {
//         firstName: "Daniel",
//         lastName: "Ricciardo",
//         age: 36
//     }
// ]

// console.log(makeFriends(myFriends.firstName)); // ["Max", "Lewis", "Daniel"]


// Exercice 13
// Je ne sais pas faire

// function findTeamPrincipal(people) {
//   for(let i = 0; i < people.length; i++) {
//     if(people.isTeamPrincipal === true) {
//       return people[i];
//     }
//   }
// }

// let somePeople = [
//     {
//         firstName: 'Toto',
//         lastName: 'Wolff',
//         isTeamPrincipal: true
//     },
//     {
//         firstName: 'Lando',
//         lastName: 'Noris',
//         isTeamPrincipal: false
//     },
//     {
//         firstName: 'Oscar',
//         lastName: 'Piastri',
//         isTeamPrincipal: false
//     },
//     {
//         firstName: 'Christian',
//         lastName: 'Horner',
//         isTeamPrincipal: true
//     }
// ]

// console.log(findTeamPrincipal(somePeople));
// /*
// [
//     {
//         firstName: "Toto",
//         isTeamPrincipal: true,
//         lastName: "Wolff"
//     },
//     {
//         firstName: "Christian",
//         isTeamPrincipal: true,
//         lastName: "Horner"
//     }
// ]
// */

