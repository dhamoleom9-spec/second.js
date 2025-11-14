// 1. Write a higher-order function `runTwice(fn)` that takes another function and executes it two times.

function parent(){
    fn()
    fn()
}

parent(fn = ()=>{
    console.log("this is function is taken by parent function")
})