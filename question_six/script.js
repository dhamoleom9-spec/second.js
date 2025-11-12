function nested(){
    let a = prompt("enter your quote")
    return ()=>{
        console.log(`the input text is as ${a}`)
    }
}

nested()();