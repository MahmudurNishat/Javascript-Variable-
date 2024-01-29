<p align="center"><a><img src="/varibalejs.jpg"></a></p>

🔗varibale

let name = "nishat"; // string type <br>
let age = 26; // number type <br>
let ages = "one"; // string type <br>
console.log(parseInt(ages)); // not a number output NaN <br>
let heights = "3.45"; // string type <br>
console.log(parseFloat(heights)); // use can use parsefloat using any string to a float number <br>
let height = 25.6; // number typer but float number <br>
let isPassed = true; // boolean type <br>
let y; // undefined data type <br>
let x = null; // object data type <br>

🔗Type of ()
if u want to know which data type they are use type of <br>
console.log(typeof age); // number type <br>
console.log(typeof x); // object type <br>
console.log(typeof y); // undefined <br>
console.log(typeof height); // number <br>
console.log(typeof heights); // string <br>

🔗 ! variable naming convension --- <br>
// _ can not use reserved word as variable name let function = 2 let object = 3 not allowed <br>
// _ can not use number before varible name like let 1num = 3 not allowed <br>
// _ can not use hyphen in varible name like let my-Name = "nishat"<br>
// _ can not captital all word like let NAME = "nishat" <br>

🔗! best practise <br>
// use camelCase word for variable name like let myName = "Nishat" -- MOST PREFER <br>
// use camelCase word for variable name like let myNameIs = "Nishat" -- MOST PREFER <br>
// use underscore for variable name like my_name = "Nishat" <br>

🔗 ! operator <br>

let a = 2;<br>
let b = 3; <br>
let sum = a + b; // sumation <br>
console.log(sum); <br>
let minus = sum - a; // substraction <br>
console.log(minus); <br>
let multiflication = minus \* sum; // multiplication<br>
console.log(multiflication); <br>
let divide = multiflication / sum; // divide <br>
console.log(divide);<br>
let modules = multiflication % divide; // bagses <br>
console.log(modules); <br>

🔗 ! shorthand operator <br>

let g = 2; <br>
// g = g+3 <br>
g += 3; <br>
console.log(g);<br>

let s = 2;<br>
s -= 5; // s = s-5 <br>
console.log(s); <br>

let p = 2; <br>
p *= 2; // p = p*2 <br>
console.log(p); <br>

let u = 8; <br>
u /= 2; <br>
console.log(u); <br>

🔗 ! conversion variable <br>

let k = 14.5; <br>
let q = "20"; <br>
let w = "20.5"; <br>
console.log(parseFloat(w)); // you can make any string into float number <br>
console.log(parseInt(k)); // you can make any floating number into integer throught parseInt <br>

🔗 ! some technical things you need to know <br>

console.log(2 + 3); // output 5 <br>
console.log(2 + "3"); // output : 23 <br>
console.log(2 - "3"); // output : -1 <br>
console.log(2 \* "3"); // output : 6 <br>
console.log(2 / "3"); // output : 0.66 <br>
console.log(2 % "3"); // output : 0.66<br>
console.log(true + 3); // output : 4 cause true means 1 and false means 0 so 1+3 = 4; <br>

🔗.toFixed()

! if u want to use deserde floating number then use .toFixed <br>
let z = 3.545446; <br>
let convert = z.toFixed(4); <br>
console.log(convert); /// now this convert is a string data type <br>
console.log(typeof convert); // output string u can not use this to adding , substrcton and others operation so then u need to use parseint and parsefloat <br>
let Numbers = parseInt(convert); // you can change it parsefloat also <br>
console.log(Numbers); /// now its a integer data type <br>
console.log(typeof Numbers); <br>

🔗isNaN

// ! now most important isNaN <br>
// it indicate whether it is a number or not it can change in number <br>
// isNaN jodi number hoi ba number e convert kora sombob hoi taile result dibe false console.log(isNaN(2)) output : false <br>
// isNaN jodi number na hoi ba number e convert kora na sombob hoi taile result dibe true console.log(isNaN("abc")) output: true <br>

let l = 2;<br>
console.log(isNaN(l)); // output false karon l is a number and isNaN means l is not a number thatswhy it shows false <br>
let o = "a"; <br>
console.log(isNaN(o)); // output true cause its not a number <br>
console.log(isNaN("29")); // false asve karon aeta number na thik ase kintu aeta ke number e convert kora sombob parseint ba parseFloat use kore , tie jehoto number e convert kora jabe aeta tar mane aeta number tie aeta false hobe <br>
console.log(isNaN("abc")); /// true cause its not a number and it cannot possible to convert number <br>
