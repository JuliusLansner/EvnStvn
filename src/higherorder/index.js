//higher order functions are funcitons that can take a 
// function as an argument and/or return a function.

// an example
const numbers = [1,2,3,4,5];

//the higher-order functions map can take a function as an argument:
const numbersDoubled = numbers.map(function(number){
    return number*2;
})
//mmap makes a new array based off of an array, where we give it the task of doubling
// the current the value while iterating through the array.

//another example using lambda
const numbersSquared = numbers.map((number) => number **2);


function callBackFunction(func){
    func();
    func();
    func();
}

function fight(){
    console.log("one two one two");
}

callBackFunction(fight);

function returnFunc(){
    return function(){
        return ":D";
    }
}

let result = returnFunc();
console.log(result)
console.log(result());
console.log(returnFunc());

//higher order function using a callback 

//make a function 
function multiByTwo(number){
    return number*2;
}
//making a higherorder function
function multiArrayByTwo(array,callback){
    return array.map(callback);
}

//using the array of numbers with the higher order function, with a callback

const result = multiArrayByTwo(numbers,multiByTwo);

