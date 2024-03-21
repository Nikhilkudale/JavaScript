let name="Nikhil"
let age =25
console.log(`Hello my name is ${name} and age is ${age}`)

const s=new String('Nikhil')
console.log(s[2])
console.log(s.__proto__) 

console.log(s.length)
console.log(s.toUpperCase())

console.log(s.charAt(3))
console.log(s.indexOf('l'))

console.log(s.substring(0,4))
console.log(s.slice(0,4))

const st= '  hello my name is nikhil  '
console.log(st)
console.log(st.trim())

console.log(st.replace('l','$'))
console.log(st.includes('n'))

console.log(st.split('n'))