console.log("Hello world");


/* ---------------variables------------------*/

let x = 10;
const y = 100;
console.log(x);
console.log(y);

var z = 41;
console.log(z);
console.log(typeof z); /*Number*/
console.log(typeof x); /*Number*/

let name = "Adarsh";
console.log(name); /*Adarsh*/
console.log(typeof name); /*string*/

let isTrue = false;
console.log(isTrue); /*false*/
console.log(typeof isTrue); /*boolean*/

let a;
console.log(a); /*undefined*/
console.log(typeof a); /*undefined*/

let b = null;
console.log(b); /*null*/
console.log(typeof b); /*object*/


/* ------------- operation with variables-----------------*/

// num+bool
let one = 33;
let two = true;
console.log(one + 12 + two); /*46*/

let ones = 33;
let twos = true;
console.log(ones - 12 - twos); /*20*/

// num+string
let one1 = 33;
let two1 = "true";
console.log(one1 + two1); /*33true*/

let one1s = 33;
let two1s = "true";
console.log(one1s - two1s); /*NaN*/

// string+num
let one2 = "Adarsh";
let two2 = 5;
console.log(one2 + two2); /*Adarsh5*/

let one2s = "Adarsh";
let two2s = 5;
console.log(one2s - two2s); /*NaN*/

/* ------------- operation with String+ Backtick-----------------*/

const myName = "Adarsh";
const surName = "Jha";
console.log(myName + " " + surName);
console.log("My Name is :" + myName + " " + surName);
console.log(`My Name is ${myName} ${surName}.`);
