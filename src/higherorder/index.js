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