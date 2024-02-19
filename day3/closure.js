/**
 * closure 
 * the ability to treat function as values ,
 * combined the fact that local bindings are created 
 * every time a function is called.
 * 
 */
//example
function wrapValue(n){
   let local = n;
   return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
//console.log(wrap1())
//console.log(wrap2())

//This feature—being able to reference 
//a specific instance of a
//local binding in an enclosing scope—is
// called closure.
function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2)
console.log(twice(5))
//10
