// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and 
//returns an array that length containing the numbers of the Fibonacci sequence.
// declare function fiboArrRtn
// this function needs a repetitive task(fibaddition)
// should take an in number input and return an array of numbers that satisfy the repetitive task

//I really messed this one up but these code challenges crippled me. I need a lot more practice before I can 
// get these down. 
var i;
var fib = []; //I watched a tutorial on how to use fib in JS. I was moving in the right direction but then it
// getting a little off the rails

fib[0] = 1;
fib[1] = 2;
for (i = 2; i <= 10; i++) {
  fib[i] = [fib[i - 2] + fib[i - 1]]
  let fibArrRtn = function(string){
      return [fib]// in order to return the array, I used this function.
  };
/////////----------> what returns now is a mess of arrays where it is trying to fib and then just combines the
// numbers. I'm lost. I don't even know where to begin to test this.
// 
// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array and returns a new array of 
//only odd numbers sorted from least to greatest.

// declare function of oddsOnlyArr
// filter out all non odds, all strings, and boolean.
// return only odd numbers in an array
function oddsOnlyArr(arr) {
    const odds = arr
        .filter(x => x%3 === 0) // use .filter to filter out the odds
        .sort((a, b) => a - b); // using .sort to the numbers. I sorted after the filer
                                //I was trying to use something like (int i = 0; i < array.length; i++) but it was also coming out wring
    return arr
        .map(x => x%3 ? odds.shift() : x);
}

console.log(oddsOnlyArr(fullArr1));


// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]   
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array and returns an array of the 
//accumulating sum. An empty array should return an empty array.

     //declare function cumulativeSum
     //this function takes an arrray and accumulates each number along each index
     //return should be a new array with the sum of each index of the previous in each array
//
const numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
//
const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// //
const numbersToAdd3 = []
// // Expected output: []

 const cumulativeSum = (sum => value => sum += value)(0);

//I was able to find a really helpful video on accumulating sums and pairing that with .maps
//I'm able to add each index prior. The code 

console.log(numbersToAdd2.map(cumulativeSum));
console.log(numbersToAdd1.map(cumulativeSum));
console.log('breaking the rules', numbersToAdd3.map(cumulativeSum))

// a) Create a test with expect statements for each of the variables provided.

describe(`accumulating sum of each index in array`, ()=>{
            test(' accumulates sum and returs summed array ',) ()=>{
              expect(cumulativeSum(numberstoadd1).toequal(sum => value => sum += value)(0))
              expect(cumulativeSum(numberstoadd2).toequal(sum => value => sum += value)(0))
              expect(cumulativeSum(numberstoadd3).toequal(sum => value => sum += value)(0))
            } )
          })

// is this an exceptable approach to writing the failing test? or is it too much detail?
// describe(cumulativeSum,()=>{
//     test(' accumulates sum and returs summed array ',() =>){
//       let numbersToAdd1 = [2, 4, 45, 9]
//       let var numbersToAdd2 = [0, 7, -8, 12]
//       let numbersToAdd3 = []
//       expect(cumulativeSum(numberstoadd1).toequal(sum => value => sum += value)(0))
//               expect(cumulativeSum(numberstoadd2).toequal(sum => value => sum += value)(0))
//               expect(cumulativeSum(numberstoadd3).toequal(sum => value => sum += value)(0))
           
//     })
// })


var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

const cumulativeSum = (=> {   // here is where the arguments go
      let numbersToAdd1 = [2, 4, 45, 9]
      let var numbersToAdd2 = [0, 7, -8, 12]
      let numbersToAdd3 = []
   //This is where I got a little lost. I believe I can use the failed test to structure the function that passes
   // the test but maybe I have that wrong. I will keep studying this.  
            expect(cumulativeSum(numberstoadd1).toequal(sum => value => sum += value)(0))
              expect(cumulativeSum(numberstoadd2).toequal(sum => value => sum += value)(0))
              expect(cumulativeSum(numberstoadd3).toequal(sum => value => sum += value)(0))
           
    })
})


// Austin I'm sorry I don't have any worthy testing here but the code creating itself was overwhelming this week. I need a lot more
// practice creating code so I can quickly solve these without hours of research of what works. I got a long way to go
// here. That debugging challenge literally sucked up my entire Sat and I was lost. I'm going to hit it hard this week
// but honestly, aside to when I as dead, I out a lot of time into this and it is taking longer than I expected to grasp.
// I fully expect to have to redo this and I intend to as I get more comfotable with these code-concepts. 
// I don't want you to think I'm blowing this off. There are days I want to quit. I won't but they are there.
// I'm here to get everything I can from this. Even if my brain is intending to slow me down.  