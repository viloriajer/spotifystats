let arr = ['rock','rock','pop','rap','metal']


const count = (array, string) =>{
    return array.filter((val) => (val === string)).length
}

console.log(count(arr,'pop'));