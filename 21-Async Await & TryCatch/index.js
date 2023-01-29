/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data.fact);
};

fetchData();

//op: {fact: 'A female cat is called a queen or a molly.', length: 42}
// A cat can jump up to five times its own height in a single bound.
*/
// -----------2.-----------
/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  para.innerText = data.fact;
};

fetchData();
*/

// --------------3.---------------
/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

console.log("a");
const fetchData = async () => {
  console.log("f1");

  const response = await fetch(url);
  console.log("f2");

  const data = await response.json();
  console.log("f3");

  para.innerText = data.fact;
  console.log("f4");
};

fetchData();
console.log("z");

//op:
// a
// f1
// z
// f2
// f3
// f4
// ->await makes async, so it freezes below code snipet and z is printed

*/

// ----------4.Error Handling---------
/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  const response = await fetch(url);

  const data = await response.json();

  para.innerText = data.fact;
};

fetchData().catch((error) => {
  console.log(error);
});
*/

// --------------5.Try-catch block---------
/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    para.innerText = data.fact;
  } catch (error) {
    console.log(error);
    // console.log(error.message);
  }
};

fetchData();
*/

// --------------5.Try-catch-finally---------
/*
const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    para.innerText = data.fact;
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`I will print everytime`);
  }
};

fetchData();

*/

// --------------5.Error throw---------

const url = "https://catfact.ninja/fact";
const para = document.getElementById("para");

const fetchData = async () => {
  try {
    throw new Error("I am poor  error");
    // After error throwing line below code not exec.  now command go to catch block and throw the error using catch
    const response = await fetch(url);

    const data = await response.json();

    para.innerText = data.fact;
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`I will print everytime`);
  }
};

fetchData();
