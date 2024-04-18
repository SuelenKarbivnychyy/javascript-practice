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
  // console.log(` output variable type: ${typeof(output)}`);
  // console.log(`output variable type: ${typeof([])}`);
  
  const firstLetterToWords = {}

  for (const name of names) {

    if (name[0] in firstLetterToWords) {
      firstLetterToWords[name[0]].push(name);

    } else {
      firstLetterToWords[name[0]] = [name];
    };    
  };

  const hasWordsLeft = true;

  let lastItem = output.slice(-1);

  // #TODO: gete the last char of the last element of output array
  // let startLetter = lastItem.length ;
  // console.log(lastItem);
  // console.log(typeof(lastItem));

  // console.log(` start letter value: ${startLetter} `);

  // while (hasWordsLeft) {
    
  //   let startLetter = output.slice(-1);

  // }
  


}

kidsGame(["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]);



