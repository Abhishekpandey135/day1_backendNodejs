/**
 * differnce betwwen var/let/const
 * 
 * var                                    let                                const
 * it is used to define a variable         =                                   =
 * it has function scope not block      block scope                        block scope
 * hoisting                              no hoisting                          no hoistig
 * value can be changed           value can be changed (not in block)      no value change
 *
 

function f1(){
    var i =5
    console.log(i)
}
f1()
console.log(i)
*/

//const
const country = "india"
country = "usa"
