# 5 Types of Primitive Types

1. Number
2. String
3. Boolean
4. Null
5. Undefined

#### Technically there are 2 more: Symbol & BigInt

## Numbers

1. JS has only 1 numbers, (as opposed to java,and C++ where we have int,float, double etc.), which can be whole numbers, integers ( + / - ), and decimal numbers
2. Does not store infinitely precise numbers (eg. 1.00090909090903 will give output **1**)
3. 5 \*\* 2 = 5 to the power 2 = 25
4. Arithmetic Operations follow BODMAS rule
5. NaN = Not a number
   1. 0 / 0 = NaN
   2. 1 + NaN = NaN
   3. 1/0 = Infinity (there's no way to store Infinity)
   4. -0 = -0 (This has its own value in JavaScript, Super Weird!)

## Variables

### Let

1. Reserved Keyword

### Const

![Const](images/2020-07-22-14-38-09.png)

### Var

1. It makes no sense to use it now-a-days. (Its the old way of using it)

![Use of Var](images/2020-07-22-14-43-33.png)

#### Use Cases

```javascript
//var, let, const
//AR - Block Scoped
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Can not start with number

// Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET - Function Scoped
let name;
name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST - Cannot be reassigned
const name = 'John';
console.log(name);
//Can not reassign
name = 'Sara';
//Have to assign a value
const greeting;
```

### Boolean

![True or False Boolean](images/2020-07-22-14-46-41.png)

![Variables can change Type!](images/2020-07-22-14-48-03.png)

### String

1. Be consistent with quotes!
   ![Be consistent with Quotes](images/2020-07-22-14-48-49.png)

### String Properties

1. `.length` property is used to access length of a string.
2. Strings are immutable. (A string characters cannot be changed/manipulated)
3. Every method on string does not change the string itself

   ```javascript
   let str = "Hello";
   str.toUpperCase(); // This will return "HELLO" but value of str will still remain "Hello"
   ```

### Some String Methods

```js
// STRING METHODS AND CONCATENATION

const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

let val;

val = firstName + lastName; // O/P: "WilliamJohnson"

// Concatenation
val = firstName + " " + lastName; // O/P: "William Johnson"

// Append
val = "Brad ";
val += "Traversy"; // O/P: "Brad Traversy"

val = "Hello, my name is " + firstName + " and I am " + age;

// Escaping Characters
val = "That's awesome, I can't wait"; // O/P: "That's awesome, I can't wait" Notice that even though there are single quotes inside the double quotes, js treats them as characters
//Conversely this can also be written as val='That"s Awesome, I can"t wait' and this time double-quotes will be treated as characters

// Length
val = firstName.length; // O/P: 7

// concat()
val = firstName.concat(" ", lastName); // O/P: "William Johnson"

// Change case
val = firstName.toUpperCase(); // O/P: "WILLIAM"
val = firstName.toLowerCase(); // O/P: "william"

val = firstName[2]; // O/P: "l"

// indexOf()
val = firstName.indexOf("l"); // O/P: 2
val = firstName.lastIndexOf("l"); // O/P: 3

// charAt()
val = firstName.charAt("2"); // O/P: "l"
```

#### Using substring()

The following example uses substring() to display characters from the string 'Mozilla':

```js
let anyString = "Mozilla";

// Displays 'M'
console.log(anyString.substring(0, 1));
console.log(anyString.substring(1, 0));

// Displays 'Mozill'
console.log(anyString.substring(0, 6));

// Displays 'lla'
console.log(anyString.substring(4));
console.log(anyString.substring(4, 7));
console.log(anyString.substring(7, 4));

// Displays 'Mozilla'
console.log(anyString.substring(0, 7));
console.log(anyString.substring(0, 10));
```

#### Using substring() with length property

The following example uses the substring() method and length property to extract the last characters of a particular string. This method may be easier to remember, given that you don't need to know the starting and ending indices as you would in the above examples.

```js
// Displays 'illa' the last 4 characters
let anyString = "Mozilla";
let anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);

// Displays 'zilla' the last 5 characters
let anyString = "Mozilla";
let anyString5 = anyString.substring(anyString.length - 5);
console.log(anyString5);
```

#### The difference between substring() and substr()

There's a subtle difference between the substring() and substr() methods, so you should be careful not to get them confused.

The arguments of substring() represent the starting and ending indexes, while the arguments of substr() represent the starting index and the number of characters to include in the returned string.

Furthermore, substr() is considered a legacy feature in ECMAScript and could be removed from future versions, so it is best to avoid using it if possible.

```js
let text = "Mozilla";
console.log(text.substring(2, 5)); // => "zil"
console.log(text.substr(2, 3)); // => "zil"
```

#### Differences between substring() and slice()

The substring() and slice() methods are almost identical, but there are a couple of subtle differences between the two, especially in the way negative arguments are dealt with.

The substring() method swaps its two arguments if indexStart is greater than indexEnd, meaning that a string is still returned. The slice() method returns an empty string if this is the case.

```js
let text = "Mozilla";
console.log(text.substring(5, 2)); // => "zil"
console.log(text.slice(5, 2)); // => ""
```

If either or both of the arguments are negative or NaN, the substring() method treats them as if they were 0.

```js
console.log(text.substring(-5, 2)); // => "Mo"
console.log(text.substring(-5, -2)); // => ""
```

slice() also treats NaN arguments as 0, but when it is given negative values it counts backwards from the end of the string to find the indexes.

```js
console.log(text.slice(-5, 2)); // => ""
console.log(text.slice(-5, -2)); // => "zil"
```

## Template Literals

```js
// TEMPLATE LITERALS

const name = "John";
const age = 31;
const job = "Web Developer";
const city = "Miami";
let html;

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  city +
  " </li></ul>";

html =
  "<ul>" +
  "<li>Name: " +
  name +
  "</li>" +
  "<li>Age: " +
  age +
  "</li>" +
  "<li>Job: " +
  job +
  "</li>" +
  "<li>City: " +
  city +
  "</li>" +
  "</ul>";

function hello() {
  return "hello";
}

// With template strings (es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
`;
```
