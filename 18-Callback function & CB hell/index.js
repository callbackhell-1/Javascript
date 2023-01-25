//  ------------1.Example------------
/*
function sum(a = 1, b = 1) {
  return a + b;
}

function displaySum(result) {
  const h4 = document.querySelector("h4");
  h4.innerText = sum(10, 15);
}
*/

// --------------2.Example-------------
/*
function sum(a = 1, b = 1) {
  return a + b;
}

function displaySum(result) {
  const h4 = document.querySelector("h4");
  h4.innerText = result;
}

let result = sum(10, 45);
displaySum(result);
*/

//  ------------3.Example-----------

/*
function sum(a = 1, b = 1) {
  let result = a + b;
  displaySum(result);
}

function displaySum(result) {
  const h4 = document.querySelector("h4");
  h4.innerText = result;
}

sum(10, 65);

// Problem of this code is that every time we call the sum function it auto call the displaySum function, let's say if we want to console instead of display, but it will not happen because every time we call the sum function it auto call the displaySum function.
// We use call back function

*/

// ------------4.callback Function-----------
/*
function sum(a, b, thisIsCallbackFuncRcv) {
  let result = a + b;
  thisIsCallbackFuncRcv(result);
}

function displaySum(result) {
  const h4 = document.querySelector("h4");
  h4.innerText = result;
}

sum(10, 65, displaySum);
 */
/* So we can say that on thisIsCallbackFuncRcv is equal to displaySum function

High order function -> here sum is a high order function because it received a function as a parameter.
call back function -> Function which are sent as an argument is known as call back function .eg. displaySum
*/

// ------------5. Example-----------
/* 
const arr = [1, 2, 3, 4, 5, 6];

function calculatorMulByTen(arr = []) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] * 10);
  }
  console.log(ans);
}

function calculatorDivByTen(arr = []) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(arr[i] / 10);
  }
  console.log(ans);
}

calculatorMulByTen(arr); //(6) [10, 20, 30, 40, 50, 60]
calculatorDivByTen(arr); //(6) [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
*/
// As we can see here we repeating our code , which is not good.

// ------------6. Example-----------
/* 
const arr = [1, 2, 3, 4, 5, 6];

function calculator(arr = [], callback) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    ans.push(callback(arr[i]));
  }
  console.log(ans);
}

const sum = (a) => {
  return a + 20;
};

const mul = (a) => {
  return a * 20;
};

const div = (a) => {
  return a / 20;
};

const sub = (a) => {
  return a - 20;
};

calculator(arr, sub);
calculator(arr, (a) => a % 10); //(6) [1, 2, 3, 4, 5, 6]
*/

/* We can use callback Sync as well as Asyc. */

// ------------7. Example-----------

const gameList = [];

const fetchData = (displayGame1) => {
  setTimeout(
    (displayGame1) => {
      gameList.push(
        {
          game: "Mario",
          id: 1,
        },
        {
          game: "Power",
          id: 2,
        },
        {
          game: "packman",
          id: 3,
        }
      );
      // console.log("inside", gameList);
      displayGame1(); //b. then we used that
    },
    4000,
    displayGame1 //1st we receive callback then b.
  );
};

// console.log("before", gameList);
// fetchData();
// console.log("after", gameList);

/* op :  
before []
after []
-> After 4 sec,inside (3)
*/

// whaterver data we get we will append it in p tag

const displayGame = () => {
  setTimeout(() => {
    for (let i = 0; i < gameList.length; i++) {
      const p = document.createElement("p");
      p.innerText = gameList[i].game;
      document.body.append(p);
    }
  }, 1000);
};

fetchData(displayGame);

// callback hell: callback inside callback
