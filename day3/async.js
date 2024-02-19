/**
 * Asynchronous javaScript
 * js is sinle threaded language
 * basically it is for performing multiple task at the same time 
 * without waiting or getting busy 
 */
console.log("hello from the last line")

setTimeout(()=>{
    console.log("hello from the call back function fn")

},3000)
console.log("hello from the last time")
//delay of one second program
function delayonesec(){
    let currentTime = new Date().getTime()
    while(new Date().getTime())
}
