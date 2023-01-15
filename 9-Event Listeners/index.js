const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "black";
});

/*
btn.addEventListener("click", () => {
  box1.style.backgroundColor = "yellow";
  box1.style.padding = "30px";
});
*/

btn.addEventListener("click", () => {
  box1.classList.add("forDiv");
});

box1.addEventListener("mouseover", () => {
  btn.style.transform = "scale(1.5)";
});

box1.addEventListener("mouseout", () => {
  btn.style.transform = "scale(1.5)";
});

// prevent default -> prevent the event listener
// so here contextmenu -> used for right click and we prevented it.now we are not able to righ click on btn. but bg-color will chng
btn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  btn.style.backgroundColor = "purple";
});

// To disable right click on page

addEventListener("contextmenu", (e) => {
  e.preventDefault();
  btn.style.filter = "blur(10px)";
});

/*where we have applied above eventList ?? -> it's on windows objet. */

// Get mouse co-ordinate
addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
});

/*--Remove event listener--- */

box1.removeEventListener("mouseover", func1);

function func1() {
  btn.style.transform = "scale(1.5)";
}

// So here we pass function also inorder to remove event listener.

// Q. Drawback of Anonfunction? . 
// Ans : When we try to remove event listener, then we have to pass function name also but because of anonymous function we are not able to pass function name