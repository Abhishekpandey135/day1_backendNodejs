/**
 * Function 
 * //used for resue and call from anywhere
 * define a function
 
function hellostudents(){     //decleration of function
    console.log('hello students !')
}
hellostudents()       // calling of a function/
*/

/**
 * i want to get the sum of 2 numbers
 * 
 
function sum(a,b){  // a and b are parameters 
    return a+b;              // return keywards are optionals
}

console.log(sum(5,6))   // 5 and 6 are arguments


// Functions have special powers in javascript 
function func(){
    console.log(arguments)
}
func(1,2,3,4,5,6)
//you can use based on ypur skills

//for making syntax small and sleak we use (ARROW FUNCTION)
var hello = () => console.log("hello world")
hello() 
hello()
hello()        
//arrow function
//function with parameters and returns
var sum =(a,b) => a+b          // parameters
console.log(sum(9,9))          //arguments
*/

//fun with parameters , multiple lines of function body
/**
var process = (a,b) =>{
    console.log("need to process")
    return a*b
}
console.log(process(5,6))  // program to find the multiplication

//ARROW FUNCTION

 * Arguments calling is not allowed in the arrow function
 */

//*************************************** ANN0MYMUS FUNCTION****************************
/***
 *IIFE
 IMMEDIATELY INVOKE FUNCTION EXPRESSION
 FOR IMMEDIATE CALLING OF FUNCTION 
 * 

 (functions(){
    console.log("hello student")
 })() */ 