//1. ////////////////////////////////////////////////
function hasZeroSum(numbers) {
    let seen = new Set();
    
    for (let num of numbers) {      
      let complement = -num;        
      if (seen.has(complement)) {   
        return true;
      }
      seen.add(num);
    }
    
    return false;
  }
console.log(hasZeroSum([1, 2, 3, -2])); // true
console.log(hasZeroSum([1, 2, 3, 4])); // false
console.log(hasZeroSum([0, 1, -1])); // true

// 2. //////////////////////////////////////////////
function hasUniqueChars(word) {
    let charSet = new Set();
    
    for (let i = 0; i < word.length; i++) {
      let char = word.charAt(i);
      
      if (charSet.has(char)) {
        return false;
      } else {
        charSet.add(char);
      }
    }
    
    return true;
  }
  console.log(hasUniqueChars("hello")); // false
  console.log(hasUniqueChars("world")); // true
  console.log(hasUniqueChars("apple")); // false
  console.log(hasUniqueChars("banana")); // true
  
  // 3. /////////////////////////////////////////////
  function isPangram(sentence) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerCaseSentence = sentence.toLowerCase();
    
    for (let char of alphabet) {
      if (!lowerCaseSentence.includes(char)) {
        return false;
      }
    }
    
    return true;
  }
console.log(isPangram('The quick brown fox jumps over the lazy dog.')); // true
console.log(isPangram('I like cheese.')); // false
console.log(isPangram('Pack my box with five dozen liquor jugs.')); // true
console.log(isPangram('Amazingly few discotheques provide jukeboxes.')); // true

// 4. ////////////////////////////////////////////////////////////////////////////////

function findLongestWord(words) {
    let longestWordLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWordLength) {
        longestWordLength = words[i].length;
      }
    }
    return longestWordLength;
  }
  const words = ['cat', 'dog', 'elephant', 'giraffe'];
const longestWordLength = findLongestWord(words);
console.log(longestWordLength);  // Output: 8
