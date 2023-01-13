function combineArray(array1, array2) {
    let array3 = [];
    return array3 = array1.concat(array2);
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