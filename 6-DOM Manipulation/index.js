console.log(document.body);
console.log(document.head);
console.log(document.documentElement);
/*return whole html */

/* -------------TO access 1st child of body -------------*/
console.log(document.body.firstChild);
/* #text  --> text because after body there is space , so it's consider space as a text*/

/* -----TO access 1st child Element of body ----*/
console.log(document.body.firstElementChild);
/* o/p: <h1>DOM Manipulation</h1> */

console.log(document.body.childNodes);
/* NodeList(16) [text, h1, text, div, text, div, text, div, text, div, text, comment, text, script, text, script] */

console.log(document.body.children);
/*  HTMLCollection(7) [h1, div, div, div, div, script, script] */
/*  It's seems like an array but it's not an array. */

/* To convert it in Array  */
const arr = document.body.children;
const newArr = Array.from(arr);
console.log(newArr);
/* (7) [h1, div, div, div, div, script, script]  Now its an array*/

for (let i = 0; i < newArr.length; i++) {
  console.log(newArr[i]);
}

/* ----------------------Selectors--------------------------  */

console.log(thisOne);
/*<div id="thisOne">How</div>*/

console.log(document.getElementById("thisOne"));
/*<div id="thisOne">How</div>*/

console.log(document.getElementsByClassName("dummy"));
/*HTMLCollection [div.dummy]   if we gave class dummy to one element */
/* HTMLCollection(2) [div.dummy, div.dummy]   if we gave class dummy to two element*/

const dummy = document.getElementsByClassName("dummy");
console.log(dummy[0]);
console.log(dummy[1]);
console.log(dummy[2]);
/*  <div class="dummy">Are</div> */
/*   <div class="dummy">brother</div>*/
/* undefined ==>because we gave dummy class in only two div i.e, 0 & 1 idx can be accessble */

const inputVar = document.getElementsByName("email");
console.log(inputVar);
/* in output we got list  */
console.log(inputVar[0]);
console.log(inputVar[1]);
/*  <input type="email" name="email"> */
/*undefined*/

/* By Tag NAme  */

const spanVar = document.getElementsByTagName("span");
console.log(spanVar);
console.log(spanVar[0]);
console.log(spanVar[1]);
/*  HTMLCollection [span] */
/*  <span>Temp</span> */
/* undefined  */

/* ----------------Manipulate inner items/class--------------------  */

spanVar[0].textContent = "Temp to Changed One";
spanVar[0].innerText = "Random";

/* Re-write whole tag  */

spanVar[0].innerHTML = `<span class="newClass"> This is re-writed span</span>`;

/* --------------------------- Apply CSS--------------------  */

spanVar[0].style.backgroundColor = "yellow";
spanVar[0].style.color = "red";

/* ------Apply changes in Button------  */

// console.log(btn);
/* <button id="btn">Submit</button>  */

let btn = document.getElementById("btn");
console.log(btn);
/* <button id="btn">Submit</button>  */

btn.style.backgroundColor = "aqua";
btn.style.border = "none";
btn.style.padding = "2vmax";
btn.style.cursor = "pointer";

/* -----------------------QUERY SELECTOR--------------------------  */

let que = document.querySelector(".que");
que.innerText = "My World";

/* --------------------Access elements Attribute-------------------  */

let que1 = document.getElementById("que1");
console.log(que1.getAttribute("id"));
console.log(que1.getAttribute("class"));
console.log(que1.getAttribute("id"));
/* que1  */
/* class1 class2*/
/* que1  */

/* -------------------setAttribute-------------------  */
que1.setAttribute("class", "classFromJs");
/*  Old class will be replaced */

/* -----------------TO create new element using JS------------------  */

const h2 = document.createElement("h2");
document.body.append(h2);
// document.body.prepend(h2);
h2.innerText = "This is my h2";
h2.textContent = "This is my h2 again";

/* or  */

const myText = document.createTextNode("This is sample text for h2");
h2.append(myText);
