let name = "nishat"; // string type
let age = 26; // number type
let ages = "one"; // string type
console.log(parseInt(ages)); // not a number output NaN
let heights = "3.45"; // string type
console.log(parseFloat(heights)); // use can use parsefloat using any string to a  float number
let height = 25.6; // number typer but float  number
let isPassed = true; // boolean type
let y; // undefined data type
let x = null; // object data type

// * if u want to know which data type they are use type of
console.log(typeof age); // number type
console.log(typeof x); // object type
console.log(typeof y); // undefined
console.log(typeof height); // number
console.log(typeof heights); // string

// !  variable naming convension ---
// * can not use reserved word as variable name let function = 2 let object = 3 not allowed
// * can not use number before varible name like let  1num = 3 not allowed
// * can not use hyphen in varible name  like let my-Name = "nishat"
// * can not captital all word  like let NAME = "nishat"

// ! best practise
// use camelCase word for variable name like let myName = "Nishat" -- MOST PREFER
// use camelCase word for variable name like let myNameIs = "Nishat" -- MOST PREFER
// use underscore for variable name like my_name = "Nishat"

// ! operator

let a = 2;
let b = 3;
let sum = a + b; // sumation
console.log(sum);
let minus = sum - a; // substraction
console.log(minus);
let multiflication = minus * sum; // multiplication
console.log(multiflication);
let divide = multiflication / sum; // divide
console.log(divide);
let modules = multiflication % divide; // bagses
console.log(modules);

// ! shorthand operator

let g = 2;
// g = g+3
g += 3;
console.log(g);

let s = 2;
s -= 5; // s = s-5
console.log(s);

let p = 2;
p *= 2; // p = p*2
console.log(p);

let u = 8;
u /= 2;
console.log(u);

// ! conversion variable

let k = 14.5;
let q = "20";
let w = "20.5";
console.log(parseFloat(w)); // you can make any string into float number
console.log(parseInt(k)); // you can make any floating number into integer throught parseInt

// ! some technical things you need to know

console.log(2 + 3); // output  5
console.log(2 + "3"); // output : 23
console.log(2 - "3"); // output : -1
console.log(2 * "3"); // output : 6
console.log(2 / "3"); // output : 0.66
console.log(2 % "3"); // output : 0.66
console.log(true + 3); // output : 4 cause true means 1 and false means 0 so 1+3 = 4;

// ! if u want to use deserde floating number then use .toFixed
let z = 3.545446;
let convert = z.toFixed(4);
console.log(convert); /// now this convert is a string data type
console.log(typeof convert); // output string  u can not use this to adding , substrcton and others operation so then u need to use parseint and parsefloat
let Numbers = parseInt(convert); // you can change it parsefloat also
console.log(Numbers); /// now its a integer data type
console.log(typeof Numbers);

// ! now most important isNaN
//  it indicate whether it is a number or not it can change in number
// isNaN jodi number hoi ba number e convert kora sombob hoi taile result dibe false console.log(isNaN(2)) output : false
// isNaN jodi number na hoi ba number e convert kora na  sombob hoi taile result dibe true console.log(isNaN("abc")) output: true

let l = 2;
console.log(isNaN(l)); // output false karon  l is a number and isNaN means l is not a number thatswhy it shows false
let o = "a";
console.log(isNaN(o)); // output true cause its not a number
console.log(isNaN("29")); // false asve karon aeta number na thik ase kintu aeta ke number  e convert kora sombob parseint ba parseFloat use kore , tie jehoto number e convert kora jabe aeta tar mane aeta number tie aeta false hobe
console.log(isNaN("abc")); /// true cause its not a number and it cannot possible to convert number
