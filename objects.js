'use strict';

// 1. countWords
function countWords(phrase) {
  // Return a dictionary of each word and the no. of times they appear.

  //   You can assume that `phrase` does not contain any punctuation and that
  //   each word is separated with a space.

  //   Arguments:
  //       phrase (str): A string of space-separated words

  //   Returns:
  //       dict: {word: # of times word appears in `phrase`}

  let wordCounts = {};
  
  for ( const word of phrase.split(' ')) {
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  
  return wordCounts;

};

// console.log(countWords("You with a space love You with a space kkk hhh"));

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Return the list of melons that cost `price`.

  // Arguments:
  //     price (float)

  // Returns:
  //    list: List of melons that cost `price`
  //    None: If there are no melons that cost `price`

  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (price in melonPrices ) {
    return melonPrices[price].sort();  
  };    

  return null;
}

console.log(getMelonsAtPrice(1));
