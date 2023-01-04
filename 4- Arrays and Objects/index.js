
let arr = [1, 2, 3];
let arr1 = ["Hello", "Adarsh"];
let arr2 = ["Adarsh", 12, [1, 2, "Hello"]];

console.log(arr);
console.log(arr1);
console.log(arr2);

let newArr = new Array(4);
console.log(newArr);
newArr[1] = 12;
console.log(newArr);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.push(25);
array.pop();
array.shift();
array.unshift(55);
array.splice(2,5);
array.reverse();
let newArray = array.slice(2,5);
console.log(newArray);

let ans = array.includes(5);
console.log(ans);

console.log(array);



/*----------Array With Loops----------------*/


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
  // arr[i]="Adarsh"
  // arr.push("Adarsh");
}

console.log(arr);



/*----------let vs const in array----------------*/


let arr = [];

arr.push(20);
arr.push(20);
arr.push(20);
arr.push(20);
console.log(arr);

const arr1 = [];

arr1.push(20);
arr1.push(20);
arr1.push(20);
arr1.push(20);
console.log(arr1);

// (4) [20, 20, 20, 20]
// (4) [20, 20, 20, 20]


/*----------objects----------------*/

const myObj = {
  name: "Adarsh",
  income: 10000000,
  male: true,
};

console.log(myObj);
console.log(myObj.income);

myObj.height="5'8";
console.log(myObj);

// {name: 'Adarsh', income: 10000000, male: true}
//  10000000
//  {name: 'Adarsh', income: 10000000, male: true, height: "5'8"}