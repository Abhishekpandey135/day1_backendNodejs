/**
 * first order function are those
 * parimeters(primitive/objects)
 * returns(primitive/objects)
 */

// *********higher order function******
/**
 * Higher orde function
 * parameters(primitive/objects/function)
 * return(primitive/object/function)
 * 
 * syntax  
 * function operations(operatorfn,a,b)
 * return operatorfn(a,b)
 */   

function operation(operatorfn,a,b){
    return operatorfn(a,b)
}
function add(a,b){
    return a +b
}
let result = operation(add,5,6)
//console.log(result)
// this above calling funtion under the function 

function getGreetMethod(){
    return function(){
        console.log("hello abhishek")
    }    
}
let greetfn = getGreetMethod()
console.log(typeof(greetfn))
greetfn()


