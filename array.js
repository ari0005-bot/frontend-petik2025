/**
 * Array 
 * Membuat array bisa dengan:
 * 1. []
 * 2. Array()
 */

 const fruits = ["Apel", "Mangga", "Jeruk"];
 const animals = Array ("Kucing", "Kerbau", "Kangguru");

// fruits.push ("Anggur");  // nambah dari belakang
// animals.unshift("Gajah") // nambah dari depan

// fruits.shift() // menghapus dari depan
// animals.pop() // hapus dari belakang

// fruits.forEach((fruit) => console.log(fruit));
// animals.forEach((animal) => console.log(animal))

// console.log(fruits[1]);
// console.log(animals[2]);

const fruitsUpper = fruits.map((fruit) => fruit.toUpperCase());
console.log(fruitsUpper);

const longNmaeFruits = fruits.filter((fruit) => fruit.length > 5);
console.log(longNmaeFruits);

const combine = [...fruits, ...animals];

 const foundItems = combine.find((item) => item == "Apel");

// const foundItems = combine.find (item) => item.toLowerCase() == "Apel".toLocaleLowerCase()

console.log(foundItems);
 

