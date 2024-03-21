//Number  2 topow of 53
//BigInt
//String
//null
//undefined
//boolean
//Symbol

//object

let s="Hello"
let b=45
// console.log(typeof s)
// console.log(typeof b)
// console.log(typeof undefined)
// console.log(typeof null)

// reference (non premitive)

//Array,Objects,Functions
const heros=["shakti","nagraj"]

//objects
let mtobj={
    name:"nk",
    age:22,
}
//function
var kick=function()
{
    // console.log("hello");
} 

////////
// Stack(Premitive),Heap(Non-Premitive)

//in yt will be nicka and ayt cahi two different reffernce
// yt will not change hence ayt willchange
let yt="NIcaks@jlad"
let ayt=yt
ayt="Cahi"
// console.log(ayt)
// console.log(yt)


//Changes in both refernce
let dict={
    name:"Nick",
    id:"1"
}
let dict2=dict
dict2.name="Kudale"
console.log(dict)
console.log(dict2)