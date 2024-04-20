'use strict';

function wordsInCommon(words1, words2) {

  // Return a list of unique words that appear in `words1` and `words2`

    // Arguments:
    //     words1 (list): A list of words
    //     words2 (list): Another list of words

    // Returns:
    //     list: A list of unique words

    const words1Set = new Set(words1);
    const words2Set= new Set(words2);

    const result = new Set();

    for (const word of words1Set) {
      if (words2Set.has(word)) {
        result.add(word);
      };
    };

    const arrayOfResult = Array.from(result);
    
    return arrayOfResult;
}

// console.log(wordsInCommon(['love', 'peace', 'fun', 'more'], ['apple', 'banana', 'fun', 'mouse', 'peace', 'dog', 'more']));



function kidsGame(names) {
  
  let output = names.splice(0, 1);
  
  const firstLetterToWords = {}

  for (const name of names) {

    if (name[0] in firstLetterToWords) {
      firstLetterToWords[name[0]].push(name);

    } else {
      firstLetterToWords[name[0]] = [name];
    };    
  };


  let hasWordsLeft = true;

  while (hasWordsLeft) {

    let lastItem = output[output.length -1];
    let startLetter = lastItem.slice(-1) ;
    
    if (startLetter in firstLetterToWords) {
      const word = firstLetterToWords[startLetter].shift();

      if (word === undefined) {
        hasWordsLeft = false;
      } else {
        output.push(word);
      }

    } else {
      hasWordsLeft = false;
    };

  }; 
  
  return output;

}

console.log(kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]));

