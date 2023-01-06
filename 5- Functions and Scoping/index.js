function sum(a, b, c) {
  console.log("value of c is:", c);
  console.log(a + b + c);
}

sum(10, 10, 10); /* 30 */
sum(10, 10, 0); /* 20 */
sum(10, 10); /* NaN */

/*------- default parameter--------------*/
function sum1(a, b, c = 0) {
  console.log("value of c is:", c);
  console.log(a + b + c);
}

sum1(10, 10); /* 20 */
sum1(10, 10, 10); /* 30 */

/*------- Anon function--------------*/

let anonFun = function (a, b) {
  return a + b;
};
anonFun(20, 80); /* 100 */

/*-------  function--------------*/

function intro(name, money) {
  console.log(`Hi my name is ${name} and I earn $${money} per hour.`);

  console.log(`And my address is ${anonFun(25, 25)} street view CA`);
}

intro("Adarsh", 50);
// Hi my name is Adarsh and I earn $50 per hour.
// And my address is 50 street view CA

/*-------  TASK : Array Total--------------*/

let arr = [1, 2, 3, 4, 5];

function sumOfArray(arr = []) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
let result = sumOfArray(arr);
console.log(result); /*15*/

/*-------  Scoping--------------*/

let a = 100;
{
  let a = 50;
  console.log(a); /*50*/
}
console.log(a); /*100*/

let a1 = 100;
{
  let a1 = 50;
  let b = 20;
  console.log(a1); /*50*/
  console.log(b); /*20*/
}
console.log(a1); /*100*/
// console.log(b); /*error b is not in global scoping , b is local scope*/

/*-------  let vs var --------------*/

let a2 = 100;
{
  let a2 = 50;
  var b = 20;
  console.log(a2); /*50*/
  console.log(b); /*20*/
}
console.log(a2); /*100*/
console.log(b); /*20*/
