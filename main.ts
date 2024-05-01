//Deep learning of objects

// Defining an object with explict type annotations

let person : {name:string; age:number} = {
  name : "Alice",
  age : 30
}
console.log(person.name); //output Alice
console.log(person.age); // output 30

// Defining an interface for a person object 

interface Person {
    name : string,
    age : number
}
// Declaring a variable for type person
let person2 : Person ={
    name: 'Bob',
    age : 25
}
console.log(person2.name); // Output Bob 
console.log(person2.age); // Ouput 25

//Another example of object
interface Address {
    street : string;
    city : string;
}
interface person {
    name:string;
    age: number;
    address: Address;
}

let person3 : person={
    name : 'Bilal',
    age : 26,
    address : {
        street: "123 main road",
        city : "Downtown"
    }
};
console.log(person3.address.street)

