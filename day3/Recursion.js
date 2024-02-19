/**
 * Recursion 
 * a function to call itself
 */
function power(base, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base*power(base, exponent-1)
    }
}
console.log(power(2,3))
//Recursion is not always just an inefficient 
//alternative to looping. Some problems really
// are easier to solve with recursion than with loops.
// Most often these are problems that require exploring
// or processing several “branches”,
// each of which might branch out again into even more branches

function findSolution(target){
    function find(current, history){
        if(current == target){
            return history
        }else if(current > target){
            return null
        }else{
            return find(current + 5,`(${history} + 5)`) ||
                   find(current * 3,`(${history} * 3)`);
        }
    }
    return find(1, "1");
}
//console.log(findSolution(25));
// practice program to solve some give problem


/*We want to write a program that prints two numbers:
 the numbers of cows and chickens on a farm,
 with the words Cows and Chickens after them and 
 zeros padded before both numbers so that they are
  always three digits long.*/
//expected outpout (007 cows, 011 chickens)
function print_no_animals(cows,chickens){
    let cowString = String(cows)
    while(cowString.length < 3){
        cowString = "0"+ cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens)
    while(chickenString.length <3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
console.log(print_no_animals(7,10))