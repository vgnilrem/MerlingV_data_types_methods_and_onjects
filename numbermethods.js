// w a function make prompt the user to enter a decimal number --> round it using Math.round() and display result

function roundDecimal() {
    let userInput = prompt("Enter a decimal number:");

    let decimalNumber = parseFloat(userInput);

    let roundedNumber = Math.round(decimalNumber);

    console.log("The rounded number is:" + roundedNumber);
}

// w a function take an array of decimal numbers and create a new array with all values rounded down using Math.floor()

let decimalNumbers = [12.7, 3.4, 9.8];
let roundedDownNumbers = decimalNumbers.map(num => Math.floor(num)); // map makes it loop through the array and apply math floor to each value inside
console.log(roundedDownNumbers); //now print to display!

// online store rounds all prices up to the nearest WHOLE number. Convert an array of prices to the nearest whole number using Math.ceil() 

let onlineStorePrice = [10.5, 20.4, 32.5, 16.75];
let roundedUpPrices = onlineStorePrice.map(price => Math.ceil(price)); // remember you can use map to call the math ceil to the whole array
console.log(roundedUpPrices);


// Number Methods --> create a function that take a number and checks whether it is a perfect square

function aPerfectSquare(num) {
    return Math.sqrt(num) % 1 === 0;
}

console.log(aPerfectSquare(16)); // true

// given an array of numbers, find the smallest number using Math.min()

let arrayOfNumbers = [25, 26, 28, 30];
let smallestnNumber= Math.min(arrayofNumbers);
console.log(smallestNumber);

// given an array of numbers, find the largest number using Math.max()
let newNumbersArray = [25, 26, 28, 30];
let largestNumber = Math.max(newNumbersArray);
console.log(largestNumber);