// ? if -else conditional
// when u have only two condition use if-else

// if (condition){
//     console.log() true hole
// }
// else{
//     console.log() false hole
// }

let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is smaller than 10");
}

let y = 30;
if (y === 20) {
  /// use it === when u need to compare anything
  console.log("y is equal to twenty");
} else {
  console.log("y is not equal to twenty");
}

let z = 30;
if (z !== 20) {
  // abc is not qual to 20
  /// use it === when u need to compare anything
  console.log("z is not equal to twenty");
} else {
  console.log("z is  equal to twenty");
}

// ? when u have multiple condition use if-elseif-else

let temp = 15;
if (temp > 30) {
  console.log("its a hot day "); // it goes block by block
} else if (temp > 20) {
  console.log("its a warm day  "); // it goes block by block
} else if (temp > 10) {
  console.log("its a cool day "); // it goes that lines
} else {
  console.log("its a cold day ");
}

// ? more nested if else
let hour = 3;
if (hour >= 6 && hour < 12) {
  /// 2 ta law e mante hobe  na manle next block
  console.log("its morning");
} else {
  if (hour >= 12 && hour < 18) {
    // 2ta lwaw e mante hobe
    console.log("its after noon");
  } else {
    console.log("its evening");
  }
}
