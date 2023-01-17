const myBtn = document.getElementById("myBtn");
const myInput = document.getElementById("myInput");
const deleteBtn = document.getElementById("deleteBtn");

//   /*-------------session storage INTRO------------ */

{
  // const btnClicked = function () {
  //   console.log(myInput.value);
  //   /*-------------session storage------------ */
  //   sessionStorage.setItem("key", "value");
  //   /*set key */
  //   sessionStorage.setItem("Name", "Adarsh");
  //   sessionStorage.setItem("Name", myInput.value);
  // };
  // myBtn.addEventListener("click", btnClicked);
  /* Access key's value */
  // console.log(sessionStorage.getItem("Name")); /*user input*/
  // console.log(sessionStorage.getItem("key")); /*value*/
  /* If we open same url in different tab e will get session storage key-value as null,bcoz scopeof this is only in this session */
}

/*------------------session storage Cont..----------------*/

const btnClicked = function () {
  console.log(myInput.value);
  /*-------session storage---- */
  sessionStorage.setItem("Name", myInput.value);
};
myBtn.addEventListener("click", btnClicked);

deleteBtn.addEventListener("click", () => {
  //   console.log(sessionStorage.length);
  //  console.log(sessionStorage.key(0));
  //   sessionStorage.removeItem("Name");
  sessionStorage.clear();
});
