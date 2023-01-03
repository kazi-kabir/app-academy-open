//isFive
function isFive(num) {
    if(num === 5) return true;
    return false;
}

console.log(isFive(5)); // => true
console.log(isFive(13)); // => false

//isOdd
function isOdd(num) {
    // your code here!
    if(num%2 === 0) return false;
    return true;
  }

  console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true