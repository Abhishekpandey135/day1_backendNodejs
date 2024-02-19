/**
 * higher order functions used inthe arrays
 * 
 * For each method in array **********
 */

//players =["sachin","virat","dhoni","rohit"]
//players.forEach((player)=>console.log(player))

/**
 * map --> creation of new transform 
 * 
 */
arr =[1,2,3,4,5,6]
cub_arr = arr.map(num => num ** 3)
//console.log(cub_arr)

/**
 * filter--> for filtering the elements in the given array
 */
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let even = arr1.filter((arr1)=> arr1 % 2 == 0)
//console.log(even)

/**
 * reduce--> for operation on  the whole array
 */
const sum =[1,2,3,4,5,6,7,7,7,7,8,8,8,8,9,9,9].reduce((curr, next) => curr + next)
console.log(sum)




    
