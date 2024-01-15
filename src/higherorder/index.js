//higher order functions are funcitons that can take a 
// function as an argument and/or return a function.

// an example
//making a higher order function
function multiplyByFactor(factor){
return function(number){
    return number * factor;
}
}
const multiplyByTwo = multiplyByFactor(2);
console.log(multiplyByTwo(5))


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
const numbers = [1,2,3,4,5];
//make a function 
function multiByTwo(number){
    return number*2;
}
//making a higherorder function
function multiArrayByTwo(array,callback){
    return array.map(callback);
}

//using the array of numbers with the higher order function, with a callback

const theResult = multiArrayByTwo(numbers,multiByTwo);

