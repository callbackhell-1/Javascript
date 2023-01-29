// console.log(navigator);
console.log(
  navigator.geolocation.getCurrentPosition(
    (data) => {
      //   console.log(data);
      //   console.log(data.coords.latitude);
      //   console.log(data.timestamp);
    },
    (error) => {
      //   console.log(error);
    }
  )
);

// -------history-----------------
/*
console.log(history);
console.log(history.back);
console.log(history.forward);
*/

// Location
console.log(location);
console.log(location.port);
console.log(location.pathname);
console.log(location.host);
console.log(location.hostname);
console.log(location.href);
console.log(location.protocol);
console.log(location.search);

// TO reload
const reload = () => {
  location.reload();
};

// difference between assign and replace
const func1 = () => location.replace("https://example.com/");
// const func1 = () => location.assign("https://example.com/");

console.log();
console.log();
console.log();
console.log();
console.log();
