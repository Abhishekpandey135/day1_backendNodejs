//Arrow function
//(=>) sign of arrow function

const power = (base, exponent) =>{
    let result = 1;
    for(let count =0; count < exponent; count++){
        result *= base;
    }
    return result
}
//console.log(power(3,3))
// sum of two numbers by the arrow function 
let sum = (a,b) =>{
    //console.log(a+b)
}
// arrow comes after the list of parameters and is foloowed by function body
//sum(5,6)
//these are the some examples of arrow function

// sqaure of a number using => function
const square1 =(x)=>{return x*x}
const square2 = x => x*x;
//console.log(square1(5))
//console.log(square2(5))//both the functions are same 

//when the arrow function has no parenthesis its just have an
//empty set of parentheses.
const horn =()=>{
  //  console.log("toot");
}

horn()
//*********************The Call stack***************
//The place where the computer stores this context is the call stack. 
//Every time a function is called, 
//the current context is stored on top of this stack. 
//When a function returns, 
//it removes the top context from the stack and uses that context to continue execution
function chicken(){
    return egg();
}
function egg(){
    return chicken();
}
//console.log(chicken()+"came first.")
//Maximum call stack size exceeded
// 
//******************oprional argumrnts */
function minus(a,b){
    if(b=== undefined) return -a
    else return a-b
}
console.log(minus(10))//-10
console.log(minus(10,5))//5

