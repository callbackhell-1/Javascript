/*-----------0.------------------*/
/*
const a = new Promise((resolve, reject) => {
  resolve("Promise full filled"); // no otuput
  reject("Prmise not fullfilled"); //Uncaught (in promise) Prmise not fullfilled
});
*/

/*-----------1.------------------*/
/*
const a = new Promise((resolve, reject) => {
  resolve("Promise full filled"); // no otuput
});

a.then((parameter) =>
  //this is for resolve
  {
    console.log(parameter); //Promise full filled
  }
);
*/

/*-----------2.THEN------------------*/
/*
const a = new Promise((resolve, reject) => {
  //   resolve("Promise full filled"); // no otuput
  reject("Promise not fullfilled");
});

a.then(
  (resolveParameter) =>
    //this is for resolve
    {
      console.log(resolveParameter);
    },
  // This is for reject
  (rejectParameter) => {
    console.log(rejectParameter); //Promise not fullfilled
  }
);

// This is not good practice
 */

/*-----------3.CATCH------------------*/
/*
const a = new Promise((resolve, reject) => {
  //   resolve("Promise full filled"); // no otuput
  reject("Promise not fullfilled");
});

a.then((resolveParameter) =>
  //this is for resolve
  {
    console.log(resolveParameter);
  }
).catch(
  // This is for reject
  (rejectParameter) => {
    console.log(rejectParameter); //Promise not fullfilled
  }
);
*/

/*-----------4.example------------------*/
/* 
const a = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Promise full filled");
  else reject("Promise not fullfilled");
});

a.then((resolveParameter) =>
  //this is for resolve
  {
    console.log(resolveParameter);
  }
).catch(
  // This is for reject
  (rejectParameter) => {
    console.log(rejectParameter); //Promise not fullfilled
  }
);
// op: Promise full filled
*/

/*-----------5.example------------------*/
/*
const arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "Adarsh" });
      if (arr.length > 0) resolve("Data fetched");
      else reject("Data not fetched");
    }, 4000);
  });
};
fetchData(arr)
  .then((resolveParam) => {
    console.log(resolveParam);
  })
  .catch((rejectParam) => {
    console.log(rejectParam);
  });


// op:Data fetched
*/

/*-----------6.example------------------*/

const arr = [];
const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push({ name: "Adarsh" });
      if (arr.length > 0) resolve("Data fetched");
      else reject("Data not fetched");
    }, 4000);
  });
};
fetchData(arr)
  .then((resolveParam) => console.log(resolveParam))
  .catch((rejectParam) => console.log(rejectParam))
  .finally(() =>
    console.log("I will print in every case idc about resolve and reject")
  );

//op:
// Data fetched
//  I will print in every case idc about resolve and reject
