'use strict';

// 1. printIndices
function printIndices(items) {
  
  for (const char of items) {
    console.log(`${char} ${items.indexOf(char)}`);

  };
}

// printIndices(['apple', 'berry', 'cherry'])




// 2. everyOtherItem
  // """Print a list of every other item in `items`

  // Start with index 0.

  // Arguments:
  //     items (list)
  // """
function everyOtherItem(items) {
  const result = [];

  for (const char in items) {
    if (char %2 === 0) {
      result.push(items[char])
    } 
  }

  console.log(result)

}

// everyOtherItem([5, 20, 2, 1, 3, 6, 9])





// 3. smallestNItems
function smallestNItems(items, n) {

  const orderedItems = items.sort((a, b) => a - b);
  const sortedNitems = orderedItems.slice(0, n);
  const reversedItems = sortedNitems.reverse();
  
  console.log(reversedItems);

}

// smallestNItems([50, 41, 89, 1, 10, 6], 2);