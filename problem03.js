import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("data/sowpods.txt");

console.log(scrabbleWords)

// all words with q and no u

// function that takes array input and returns array
    // loop over array
    // check for q, !u
    // push word to response array
    // return array

function qNotU(arrayOfWords) {
    
    
}