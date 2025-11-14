// 2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.
let a = prompt("enter eny value")
function purefunction(a){
    console.log(a)
}
purefunction(a);


var d = 0;
function impurefunction(){
    d++
    console.log(d + 2)
    console.log(d + 2)
}
impurefunction();