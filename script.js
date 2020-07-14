// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names){
    if (names.length == 0){
        return "no one likes this"
    }
    else if (names.length == 1){
        return `${names[0]} likes this`
    }
    else if (names.length == 2){
        return `${names[0]} and ${names[1]} like this`
    }
    else if (names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } 
    else{
        return `${names[0]}, ${names[1]} and ${(names.length-2)} others like this`
    }
}

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.'

// function alphabetPosition(text) {
//     // let finalStr = ''
//     let letters  = 'abcdefghijklmnopqrstuvwxyz';

//     for (let i = 0; i < letters.length; i++ )
//     console.log(text[i]);

// }


// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// return masked string

function maskify(cc) {
    let mask = '';
    let last = cc.substring(cc.length-4 , cc.length);
    
    while(cc.length <= 4){
        return cc;
    }

    for(let i = 0; cc.length > 4; i++){
        
            mask += '#'
            return mask + last;
        }
    
    }
    
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.


function adjacentElementsProduct(inputArray) {
    let max = -Infinity
    for(let i=1; i < inputArray.length; i++){
        max = Math.max(inputArray[i]*inputArray[i-1], max)
    }
    return max;
}



function shapeArea(n) {
    return n*n + (n-1)*(n-1);
    
}


// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:
// solution(1000); // should return 'M'

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000


// const symbols = {
//     1000: 'M',
//     500: 'D',
//     100: 'C',
//     50: 'L',
//     10: 'X',
//     5: 'V',
//     1: 'I'
// }
// const solution = (number) => {
 
//     const symbolsArray = Object.keys(symbols).reverse();
//     let romanNumber = '';

//     let nM = Math.floor(number / 1000);

// }


// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

const calc = () => {
    return (2 + 2) * (2 + 2) * 2
}


// In this kata, we will make a function to test whether a period is late.
// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// If the today is later from last than the cycleLength, the function should return true. We consider it to be late if the number of passed days is larger than the cycleLength. Otherwise return false.


function periodIsLate(last, today, cycleLength){

    const day = 24 * 60 * 60 * 1000;
    return ((today - last)/day > cycleLength ? true : false)
}

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is equal or less than two, it will return an array containing only the name as is"

function whoIsPaying(name){
    if(name.length <= 2){
        return [name];
    }
    return [name, name[0]+name[1]]
}

function whoIsPaying2(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
  }

//   Implement a function which convert the given boolean value into its string representation.
function booleanToString(b){
    return b.toString();
  }

//   Create a class Ball.
//   Ball objects should accept one argument for "ball type" when instantiated.
//   If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

class Ball {
    constructor(type){
        this.ballType = type || 'regular'
    }
};

// Write a function that always returns 5
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
// Good luck :)

const alwaysFive = () => {
    return 'okaay'.length
}


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    if (month <= 3) {
        return 1
    } else if (month <= 6) {
        return 2
    } else if (month <= 9) {
        return 3
    } else if (month <= 12) {
        return 4
    }
}

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item...
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

function nextId(ids){
    let sortedIds = ids.sort((a,b) => a - b)

    
    let minId = sortedIds.find((number, index) => {
        if(sortedIds[index + 1] - sortedIds[index] > 1){
            return number;
        }
    })
    return minId + 1;
}

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9

function expressionMatter(a, b, c) {
    let arr = [a* (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c];
    return Math.max(...arr)
}

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b. a is "close to" b if margin is higher than or equal to the difference between a and b.
// When a is lower than b, return -1.
// When a is higher than b, return 1.
// When a is close to b, return 0.\
// If margin is not given, treat it as zero.


function closeCompare(a, b, margin = 0) {
    if (a < b - margin) return -1;
    if (a - margin > b) return 1;
    return 0;
}