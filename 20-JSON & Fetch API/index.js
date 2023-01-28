// ----------0.--------------
/*
const url = "https://catfact.ninja/fact";

const fetchData = () => {
  fetch(url).then((data) => {
    console.log(data);
  });
};

fetchData();
//op: Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}

*/

// ------------------1--------------
const url = "https://catfact.ninja/fact";
const para= document.getElementById("para");

const fetchData = () => {
  fetch(url) //-> fetch retuuen promise
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => para.innerHTML= data.fact)
    .catch((err) => console.log(err))
    .finally(() => console.log("All done"));
};

fetchData();
