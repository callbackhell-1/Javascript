// 1.
const printName = (name) => {
  console.log(`my Name is ${name}`);
};

{
  /*
setTimeout(printName("Adarsh"), 5000); //This will give instant result , but we want after 5sec.so we do:

// setTimeout(printName,5000,"argumentPassing"); ->tax
*/
}

setTimeout(printName, 5000, "Adarsh"); // It will console after 5 sec

// 3.

setTimeout(
  (name, gender) => {
    console.log(`My Name is ${name} and gender is ${gender}`);
  },
  7000,
  "John",
  "Male"
);

/*---------------------clearTimeout----------------------- */

// 2.

const personDetails = (name, age, salary) => {
  console.log(`my name is ${name} age is ${age} and salary is $${salary}`);
};

const passingId = setTimeout(personDetails, 4000, "Adarsh", 45, 500);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  // Applyng it on 2.
  //   clearTimeout(id); -> syntax
  clearTimeout(passingId);
});
/* Now when we click on the button, then it will not console the (2) because we set clear timeout in it. And in clearTimeout we have pass an id */
