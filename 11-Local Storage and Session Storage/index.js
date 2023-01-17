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
{
  // const btnClicked = function () {
  //   console.log(myInput.value);
  //   /*-------session storage---- */
  //   sessionStorage.setItem("Name", myInput.value);
  // };
  // myBtn.addEventListener("click", btnClicked);
  // deleteBtn.addEventListener("click", () => {
  //   //   console.log(sessionStorage.length);
  //   //  console.log(sessionStorage.key(0));
  //   //   sessionStorage.removeItem("Name");
  //   sessionStorage.clear();
  // });
}
/*------------------Local storage ---------------*/

const btnClick = function () {
  /*It store in the form of string */
  //   localStorage.setItem("Key1", myInput.value);

  /*to store in the form of object */
  //   localStorage.setItem("key1",{name:"Adarsh",Surname:"Jha"});

  /*to convert object into string */
  localStorage.setItem(
    "key1",
    JSON.stringify({ name: "Adarsh", Surname: "Jha" })
  );
};

myBtn.addEventListener("click", btnClick);
deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("key1");
});

console.log(
  localStorage.getItem("key1")
); /*{"name":"Adarsh","Surname":"Jha"} */

console.log(
  JSON.parse(localStorage.getItem("key1"))
); /*{name: 'Adarsh', Surname: 'Jha'} */

/* Local storage , will not change if  e chg the tab,close the browser */
/* Local storage& session storage time is ~ 5/10mb */
