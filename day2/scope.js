/**
 * scope:=>  1: variables
 *           2: functions
 *           3: objects
 * //what context you are using it
 * scope are of three types 
 * 1. global scope
 * 2. function scope(  local scope)
 * 3. block scope(local scole )
 
// global scope 
var name ="abhishek"
console.log(name)

function func(){
    console.log(name)
}
func()
// here the abhishek is accesible it is called as the global scope
*/
//local scope
function func(){
    var num = 55
    console.log(num)
}
func()
console.log(num)
//it is showing an error because the num is having function or we can say that block scope  

// 