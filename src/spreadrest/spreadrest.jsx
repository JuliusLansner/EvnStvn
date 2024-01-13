//spread operator
//spread operator used with an array
const array1 = [1,2,3,4];
const array2 = [...array1,5,6];

//spread operator used with an object


const obj1 ={a:1,b:1};
const obj2 = {...obj1,c:2,d:2};

//could be used for props aswell.
const allProps = {prop1: "thing", prop2:"Stuff"}
//passing props:
//<Component {...allProps}/>

//rest parameter
//collects remaining argument values into an array

function add(...numbers){
    return numbers.reduce((accumulator,num)=> accumulator+num,0);
}
console.log(add(1,2,3,4))
