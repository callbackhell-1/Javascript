console.log("hello");
/*Type conversion */

let a = 10;
console.log(a); /*10 */
console.log(typeof a); /*number */
console.log(typeof String(a)); /* string*/

let b = "Hello";
console.log(b); /*Hello */
console.log(typeof b); /*string */
console.log(typeof Number(b)); /* number*/

let c = 10;
console.log(c); /*10 */
console.log(typeof c); /*number */
// console.log(typeof String(c)); 
c = c.toString(c);
console.log(typeof c);/* string*/

/* ----------String Methods --------*/

let s = "My name is Adarsh"

console.log(s[3]);
console.log(s.indexOf("a"));
console.log(s.lastIndexOf("a"));
console.log(s.charAt("11"));
console.log(s.endsWith("adarsh"));
console.log(s.endsWith("is adarsh"));
console.log(s.includes("adarsh"));
console.log(s.includes("is adarsh"));
console.log(s.substring(0,4));
console.log(s.slice(0,4));
console.log(s.split(" "));
console.log(s.split("a"));
console.log(s.replace("a","b"));
console.log(s.length);
console.log(s.toLocaleLowerCase());
console.log(s.substr(0,4));

/* ----------Diff b/w substr and subString --------*/

console.log(s.substring(3,4));
console.log(s.substr(3,4));

