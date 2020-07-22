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
