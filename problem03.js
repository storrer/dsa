import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("data/sowpods.txt");

console.log(scrabbleWords)

```
1. all words with q and no u

2. function that takes array input and returns array
    a. loop over array
    b. check for q, !u
    c. push word to response array
    d. return array
``` 
// https://www.w3schools.com/jsref/jsref_includes.asp
function qNotU(arrayOfWords) {
    const result = [];
    // We use const instead of let because lower overhead!
    for (const word of arrayOfWords) {
        if (word.toUpperCase().includes("Q") && !word.toUpperCase().includes("U"))
            result.push(word);
    }
    return result;
}

console.log(qNotU(scrabbleWords));