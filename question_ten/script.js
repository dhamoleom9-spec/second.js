// 4. Demonstrate the difference between normal function and arrow function when used as object methods (the `this` issue)
function normalfn(){
    console.log(this) // this = windows

}
normalfn()
let arrowfn = ()=>{
    console.log(this) // this = windows
}
arrowfn()

let anobject = {
    name: "om",
    fn: function (){ // not take value from parent thats why it give an value of objext
        console.log(this)
    },
    fnc: () => { // it takes the value from parent thats why it returns windows becous the anobject(parent) is in global 
        console.log(this)
    },
    fnc1: function (){
        let fnc2 = ()=>{
            console.log(this) // this arrow function parent is normal finction so it takes the calue from parent and give input as an object
        }
        fnc2()
    }
}

anobject.fn();
anobject.fnc();
anobject.fnc1();