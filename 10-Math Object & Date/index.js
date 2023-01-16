/*------------Math object--------- */
console.log(Math.round(5.66));
console.log(Math.round(5.45));
console.log(Math.round(5.5));
console.log(Math.round(5.55));
console.log(Math.round(5.3));
console.log(Math.round(5.1));
console.log(Math.round(5.01));
console.log("********************");
/*6 5 6 6 5 5 5 */

/* floor-> retuen lowest number */
console.log(Math.floor(5.66));
console.log(Math.floor(5.4));
console.log(Math.floor(5.505));
console.log(Math.floor(6.66));
console.log("********************");
/* 5 5 5 6*/

/* ceil-> return largest value*/
console.log(Math.ceil(4.55));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.0));
console.log(Math.ceil(14.55));
console.log("********************");
/* 5 5 4 15 */

/* truncate->remove last digit after (.)*/
console.log(Math.trunc(5.65));
console.log(Math.trunc(5.45));
console.log(Math.trunc(5.4));
console.log(Math.trunc(5.5));
console.log(Math.trunc(6.65));
console.log(Math.trunc(6.0));
console.log("********************");
/*5 5 5 5 6 6 */

/* sign*/
console.log(Math.sign(5));
console.log(Math.sign(5.5));
console.log(Math.sign(0));
console.log(Math.sign(-10));
console.log("********************");
/* 1 1 0 -1 */

/*power */
console.log(Math.pow(5, 2));
console.log(Math.pow(5, 0));
console.log(Math.pow(-1, 2));
console.log(Math.pow(0, 0));
console.log(Math.pow(-1, 10));
console.log("********************");
/*25 1 1 1 1 */

/*sqrt*/
console.log(Math.sqrt(16));
console.log(Math.sqrt(15));
console.log(Math.sqrt(625));
console.log("********************");
/* 4 3.872983346207417 25*/

/* abs*/
console.log(Math.abs(5.22));
console.log(Math.abs(-5.66));
console.log(Math.abs(7));
console.log(Math.abs(0));
console.log("********************");
/* 5 5 7 0*/

/*max,min */
console.log(Math.max(15, 66, 6, 888, 7));
/*888*/
console.log(Math.min(15, 66, 6, 888, 7));
/* 6*/
console.log(Math.random()); /* zero to 1*/
/*0.7534712154036325*/
console.log(Math.random() * 10); /* zero to 10 */
/*6.367870808540577 */

/*-------- sin,cos,log--------*/
console.log(Math.log2(256)); /*8 */
console.log(Math.log2(16)); /*4 */
console.log(Math.log10(100)); /*2 */
console.log(Math.log10(1000)); /*3 */

/* -------**------DATE OBJECT------**-------------*/

const a = new Date();
console.log(a);
/*Mon Jan 16 2023 13:03:31 GMT+0530 (India Standard Time) */

const b = new Date(1998, 08, 12);
console.log(b);
/*Sat Sep 12 1998 00:00:00 GMT+0530 (India Standard Time)*/

const c = new Date(2000, 08, 12, 05, 05, 12);
console.log(c);
/*Tue Sep 12 2000 05:05:00 GMT+0530 (India Standard Time)*/

const d = new Date(3005);
console.log(d);
/*Thu Jan 01 1970 05:30:03 GMT+0530 (India Standard Time)*/

const e = new Date("Tue Sep 12 1993 05:05:12");
console.log(e);
/*Sun Sep 12 1993 05:05:12 GMT+0530 (India Standard Time) */

// Questions:
const f = new Date(2012, 12, 13);
console.log(f);
/* Sun Jan 13 2013 00:00:00 GMT+0530 (India Standard Time) */

const g = new Date(2012, 11, 13);
console.log(g);
/*Thu Dec 13 2012 00:00:00 GMT+0530 (India Standard Time) */
/* In javascrpt january is 0 and dec is 11*/

const h = new Date(2012, 11, 40);
console.log(h);
/* Wed Jan 09 2013 00:00:00 GMT+0530 (India Standard Time)*/

const i = new Date();
console.log(i.getDate());
console.log(i.getDay());
console.log(i.getFullYear());

/*16 1 2023 */
/* sunday -> 0, Monday ->1 */
