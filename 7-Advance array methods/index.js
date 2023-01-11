/* -----------------Arrow function-----------------*/

myFunc = function (a, b) {
  console.log(a + b);
};
myFunc(2, 3);

const myArrowFun = (a, b) => {
  console.log(a + b);
};

myArrowFun(5, 5);

/* ----------------Array Method ----------------*/

const arr = [2, 4, 6, 8, 10];

const result9 = (value, index) => {
  if (value == 6) {
    console.log("6 exist");
  }
};

arr.find(result9);
/* 6 exist*/

/* ----We can do same thing as----*/

arr.find((value, index) => {
  if (value == 8) {
    console.log("8 exist");
  }
});
/*8 exist */

arr.find((value, index) => {
  if (value > 4) {
    console.log(value);
    console.log("********");
  }
});

/*
6 8 10
*/

const result = arr.find((value, index) => {
  if (value > 4) {
    return value;
  }
});

console.log(result);
console.log("********");

/* 
6 -> find returns only one value, ideally it should give 6,8,10 but as we know find returns only one value so we got 6 only.
To Get all three we need to use filter
*/

/* -----------------Filter-----------------*/
const result1 = arr.filter((value, index) => {
  if (value > 4) {
    return value;
  }
});

console.log(result1);
console.log("********");
/* (3) [6, 8, 10] -> return as array*/

console.log(result[0]);
/* undefined*/

/* -----Difference between filter and find----------*/

/* ---------every----------------*/
const everyResult = arr.every((value, index) => {
  return value > 4;
});

console.log(everyResult);

/* false because (value>4) means every element is > 4 but we have 2 & 4 less than 4 that's why false*/

/* --------------some----------------*/
const someResult = arr.some((value, index) => {
  return value > 4;
});
console.log(someResult);
/* true , koi bhi element 4 se bde hai so true.*/

/* -----------FOR OF LOOP-----------------*/

for (const element of arr) {
  console.log(element);
  console.log("********");
}

/*2 4 6 8 10 */

for (let value of arr) {
  value += 3;
  console.log(value);
}
console.log("********");
/* 5 7 9 11 13 */
console.log(arr);
/*(5) [2, 4, 6, 8, 10] -> so it means by changing value in for of it doesnt tamper the original array value*/

/* -------------FOR EACH----------------*/
arr.forEach((value, index) => {
  console.log(`value is ${value} & index is ${index}.`);
});
/* value is 2 & index is 0.
 value is 4 & index is 1.
 value is 6 & index is 2.
 value is 8 & index is 3.
 value is 10 & index is 4.

If we chg any value it will not tamper original array
*/
const forEach = arr.forEach((value, index) => {
  return value + 10;
});

console.log(forEach);
/* undefined  -> so here we get nothing in return */

/* --------------MAP----------------*/

const mapResult = arr.map((value, index) => {
  return value + 3;
});

console.log(mapResult);
/* (5) [5, 7, 9, 11, 13] */
console.log(arr);
console.log("********");

/* (5) [2, 4, 6, 8, 10] */
/* so in maap we get modified array in return wher as in forEach we got undefined */

/* map vs forEach */

/*---------------- REDUCE--------- */

// const arr = [2, 4, 6, 8, 10];

const reduceResult = arr.reduce((prevVaal, curVal, curIdx) => {
  /* return prevVaal;  --> 2 */
  /* return curVal ; --> 10 */
  /* return curIdx; --> 4 */
  /* return prevVaal+curVal --> 30 */
  /* return (prevVaal+curVal+15); --> 90 => 2 +(19+21+23+25)  it means prevValue remain constant operation start with 1st idx*/
  /* console.log(curIdx); -> 1 2 3 4 => start iteration from 1st idx not 0th */
});
console.log(reduceResult);
/* undefined  -> bcz nothing is returining*/
