/**
 * Strings
 */
let name ="abhishek"

let city = "jaunpur"
console.log(name ,city)
console.log(typeof(name))

// accessing character based on the index
console.log(name[0])
console.log(name[3])
console.log(name[11])
//strings are immutable(due to security 
//its not gping to change the string)
name[2] = "M"
console.log(name)



//length of the string
console.log(name.length)

let first_name  ="abhishek"
let last_name ="pandey"

let full_name = first_name.concat[last_name]
console.log(full_name)
// this is used for connecting
//the two words 
console.log(first_name+last_name)

//convert that into upper case
console.log(full_name.UpperCase())