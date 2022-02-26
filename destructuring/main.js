// array destructure

// let numbers = [10,20,30,40,60]
// let [num1,num2, ...z]=numbers
// // console.log(num3)
// // console.log(num5)
// console.log(z)


//swap variables
// let a=10,b=20;
// [a,b]=[b,a]
// console.log(a)
// console.log(b)


//  object destructure
const studentInfo ={
    id:101,
    name = 'Fahad',
    gpa: 3.56
}
const{id,name}=studentInfo


// nested object destructure
const studentInfo ={
    id:101,
    name :'Fahad',
    gpa: 3.56
    langueges:{
        native : 'Bangla',
        beginner : 'English'
    }
}

const{id,name}=studentInfo
console.log(langueges.native)

