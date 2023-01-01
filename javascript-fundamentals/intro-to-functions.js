// goodbye
function goodbye(name) {
    // your code here...
    return "Bye " + name + ".";
  }
  
  console.log(goodbye("Daniel")); // => "Bye Daniel."
  console.log(goodbye("Mark")); // => "Bye Mark."
  console.log(goodbye("Beyonce")); // => "Bye Beyonce."

// muscle memory
function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
  }
  
console.log(sayHello("world"));

//plus 5
function plusFive(num) {
    // your code here...
    return num + 5;
  }
  
console.log(plusFive(10));  // => 15
console.log(plusFive(2));   // => 7
console.log(plusFive(-8));  // => -3

//call this function

function isCool(string) {
    let coolSentence = string + " is cool!"
    console.log(coolSentence)
    return coolSentence
  }
  
  // Call the above function passing in the below arguments:
  // Music
  // JavaScript
  // The world
  
isCool("Music");
isCool("JavaScript");
isCool("The world");

// average of two
function averageOfTwo(num1, num2) {
    // your code here...
    return (num1+num2)/2
  }
  
console.log(averageOfTwo(3, 7)); // => 5.0
console.log(averageOfTwo(16, 5)); // => 10.5
console.log(averageOfTwo(2, 7.5)); // => 4.75

//hello
function hello(str) {
    // your code here...
    console.log("Hello " + str)
  }
  
hello("cat"); // prints "Hello, cat"
hello("Helen"); // prints "Hello, Helen"
hello("Sting"); // prints "Hello, Sting"

//divide by three
function divideByThree(num) {
    // your code here...
    return num/3;
  }
  
console.log(divideByThree(9)); // => 3.0
console.log(divideByThree(15)); // => 5.0
console.log(divideByThree(98)); // => 32.666666666666664

//whisper
function whisper(str) {
    // your code here...
    return str.toLowerCase();
  }
  
console.log(whisper("Hey Buddy")); // => "...hey buddy..."
console.log(whisper("YEA! that was fun")); // => "...yea! that was fun..."

//echo
function echo(string) {
    // your code here...
  console.log(string.toUpperCase() + "!" + " ... " + string +  "!" + " ... " + string.toLowerCase() + "!") 
  }

echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
echo("hey"); // => prints "HEY ... hey ... hey"
echo("JUMp"); // => prints "JUMP ... JUMp ... jump"

