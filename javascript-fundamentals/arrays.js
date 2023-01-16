function combineArray(array1, array2) {
    let array3 = [];
    return array3 = array1.concat(array2);
}

function doubler(numbers) {
  let doubledArray = [];
  for(let i = 0; i < numbers.length; i++) {
    doubledArray[i] = numbers[i] * 2;
  
  }    

  return doubledArray;
}

function countVowels(word) {
    // your code here...
    let count = 0;
    let vowels = [ "a", "e", "i", "o", "u"];
    
    for(letter in word) {
      if(vowels.includes(word[letter])) {
        count++;
      }
    }
  
    return count;
};
