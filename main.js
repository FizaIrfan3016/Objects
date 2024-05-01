//Deep learning of objects
// Defining an object with explict type annotations
var person = {
    name: "Alice",
    age: 30
};
console.log(person.name); //output Alice
console.log(person.age); // output 30
// Declaring a variable for type person
var person2 = {
    name: 'Bob',
    age: 25
};
console.log(person2.name); // Output Bob 
console.log(person2.age); // Ouput 25
var person3 = {
    name: 'Bilal',
    age: 26,
    address: {
        street: "123 main road",
        city: "Downtown"
    }
};
console.log(person3.address.street);
