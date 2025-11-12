// first class function ko values ke tarha use kar sakte hay

let val = function(){
    return 12;
    console.log(12)
}
val()
console.log(val)

function hay(val){
    console.log(`${val}`)                  // high order function
}
hay(function(){
    console.log("hay first calss function");
})

// high order function

function xyz(){
    return function(){
        console.log("this is hig order function")
    }
}

xyz()();