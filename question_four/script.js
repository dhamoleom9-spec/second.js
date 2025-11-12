

function unlimetedadd(...nums){
    let ans  = nums.reduce((acc,val)=>{
        return acc + val;
    }, 0)
    console.log(ans)
}

unlimetedadd(1, 2, 3, 4, 5)