// CONSTRUCTORS AND THE 'THIS' KEYWORD

// Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john.age);

const brad = new Person("Brad", "9-10-1981");
console.log(brad.calculateAge());

// BUILT-IN CONSTRUCTORS

// String

const name1 = "Jeff";
const name2 = new String("Jeff");

//name2.foo = 'bar'; // This will append a property 'foo' in the name2 string object
// console.log(name2);

console.log(typeof name2);

if (name2 === "Jeff") {
  console.log("YES");
} else {
  console.log("NO");
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);

// PROTOTYPES EXPLAINED

//Object.prototype
//Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}
/*
Why to use Prototype?
There is a clear reason why you should use prototypes when creating classes in JavaScript.

>They use less memory.

// In JavaScript
function Animal(name){
  // this is the class and the constructor at the same time.
  // Ex: var cat = new Animal('cat') 
  this.name = name;
}
So when we call new Animal() the constructor is called immediately. This is where the problem of performance occurs. Imagine I define three functions inside the constructor, this means every single time, those functions are defined anew.

function Animal(){
  this.walk = function(){};
  this.talk = function(){};
  this.jump = function(){};
}
We are creating duplicate functions every single time. If I create two or three objects, then the problem is negligible. But if we create a herd of animals, we start seeing our memory growing because for each animal we are creating a whole new method at run time/instance time.

var cat = new Animal();
var dog = new Animal();
(cat.walk === dog.walk) // false 
The walk of the first object is different then the walk of the second object because each was created during instantiation. In other words, Animal does not know that the method walk() exists before being instantiated.

The solution to the problem is to use Prototypes. What it does is allow us to define the methods once, as a blue print, and have each instance build from it.

function Animal(){};
Animal.prototype.walk = function(){};
Animal.prototype.talk = function(){};
Animal.prototype.jump = function(){};
Now any new instance has a blue print of the class before being created. So every walk is a walk, and every jump is a jump:

var cat = new Animal();
var dog = new Animal();
(cat.walk === dog.walk) // true

Link to explanation : https://idiallo.com/javascript/why-use-prototypes
*/

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith");

console.log(mary.getFullName());

console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));

//PROTOTYPAL INHERITENCE

// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

/* The above code can also be written as
// Greeting
Person.__proto__.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};
*/

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); // Call function allows to call a function from another function in current context

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());

//USING OBJECT.CREATE

const personPrototypes = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};

const mary = Object.create(personPrototypes);
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);

console.log(brad.greeting());

//ES6 CLASSES

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");

mary.getsMarried("Thompson");

console.log(mary);

console.log(Person.addNumbers(1, 2));

//SUB-CLASSES

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost());

// Learn Awesome OOP Concepts in JavaScript : https://www.youtube.com/watch?v=PFmuCDHHpwk (Tutorial by Mosh Hamedani)
