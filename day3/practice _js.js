//function is the bread and butter in the javascript programming.
//function that produce square of a number
const square = function(x){
    return x*x;
}
//console.log(square(12))

//function can have "multiple_parameters" and "no_parameter".
const makeNoise = function(){
    //console.log("pling!")
}
makeNoise()

//with paramentetrs
const power = function(base, exponenet){
    let result = 1;
    for(let count =0;count < exponenet; count++ ){
        result *= base;
    }
    return result
}
//console.log(power(3, 3))
//scope 
let x = 10;
if (true){
    let y = 20;
    var z = 30;
    //console.log(x+y+z);
    //60
}
// y is not visible here
//console.log(x+z);

const halve = function(n){
    return n/2;
}
let n = 10
//console.log(halve(100))//50
//console.log(n)//10

/**
 * Nested Scope
 * block and function can be created in another block and scope 
 * produces multiple degree of locality 
 * 

const hummus = function(factor){
    const ingredient = function(amount,unit,name){
        let ingredentAmount = amount * factor;
        if(ingredientAmount > 1){
            unit +="s";
        }
        console.log('$ {ingredientAmount} ${unit} ${name}');
    }
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
   
}
 */

console.log("the futue says:",future())
function future(){
    return "you'll never have flying cars"
}

