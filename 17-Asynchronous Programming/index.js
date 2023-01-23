/*
Async: parallel work 
-> Js is syc. programming lang.
-> Js is single threaded 
*/

// EXAMPLE: 1. Sync. Example

function example(name = "John") {
  return `Hey I am ${name}.`;
}

const result = example("Adarsh");
// console.log(result);

// EXAMPLE:2: Sync. Example

function example2(name = "John") {
  for (let i = 0; i <= 10; i++) {
    // console.log(`my name is ${name} and num is ${i}`);
  }
}
example2();
// console.log("Last line printed ***");
/*
{
my name is John and num is 0
my name is John and num is 1
my name is John and num is 2
my name is John and num is 3
my name is John and num is 4
my name is John and num is 5
my name is John and num is 6
my name is John and num is 7
my name is John and num is 8
my name is John and num is 9
my name is John and num is 10
Last line printed ***
}
*/

// Now we convert it into Async. , set timeout is one of the way to make Async.

// EXAMPLE:3: Sync. Example

function example3(name = "John") {
  setTimeout(() => {
    for (let i = 0; i <= 10; i++) {
      console.log(`my name is ${name} and num is ${i}`);
    }
  }, 4000);
  console.log("I am just outside the settimeout but in function");
}

example3("Doe");
console.log("I am  outside the settimeout and function also");

/*
{
I am just outside the settimeout but in function
I am  outside the settimeout and function also
my name is Doe and num is 0
my name is Doe and num is 1
my name is Doe and num is 2
my name is Doe and num is 3
my name is Doe and num is 4
my name is Doe and num is 5
my name is Doe and num is 6
my name is Doe and num is 7
my name is Doe and num is 8
my name is Doe and num is 9
my name is Doe and num is 10
}
*/
