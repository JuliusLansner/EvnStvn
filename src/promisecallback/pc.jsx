//promises and callback examples, and how they differ:

//callbacks are functions that are passed as arguments and are executed once
// the operation is complete. used for async operations usually.

function fetchData(callback){
    setTimeout(function(){
        const data ="some data async'ly";
        callback(data);
    },1000);
}
function useData(data){
    console.log("Data: "+ data);
}

fetchData(useData);

//promises are a structured way to handle async operations. 
//they promise that something with happen, (failure or completion)
// wherein you can use resolve/reject functions to deal with failure or completion

function promiseFetch(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const data = "data async'ly";
            resolve(data);
        },1000)
    })
}

promiseFetch().then(function(data){
    console.log("data: "+data);
})
.catch(function(error){
    console.error("error: "+error.message);
})