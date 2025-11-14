// 3. Write a function that uses object destructuring inside parameters to extract and print `name` and `age`.
function objectdestructuring({name,age,address: {city, subdistrict,district,state}}){
console.log(name,age,city,subdistrict,district,state)
}
let nam = prompt("enter your name")
let vaay = +prompt("enter your age")
objectdestructuring({
    name : `${nam}`,
    age: `${vaay}`,
    address:{
        city: "tamgaon",
        subdistrict: "sangrampur",
        district: "buldhana",
        state: "maharashtra"
    }
})