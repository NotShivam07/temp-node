// CommonJS, every file is module (by default)
// Modules - Encapsulated Code(only share minimum)

// const secret='SUPER SECRET'//i am going to move these names to another file named first_module.js
// const john = 'john'
// const peter='peter'

// const sayHi=(name)=>{//now i am going to move this function to another file named second_module.js
//     console.log(`Hello there ${name}`)
// }

const names=require('./2-first-module')
const sayHi=require('./4-second_module')
const data=require('./5-alternative_exports-method')

sayHi('susan')//we have only these calls in this file and we have moved the func sayHi and names to other files that's why they are commented
sayHi(names.john)
sayHi(names.peter)
console.log(names)
console.log(data)


require('./6-mind-grenade')