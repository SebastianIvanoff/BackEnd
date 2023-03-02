
const User = require('./user')


const User2 = new User('Hans', 'Martin-Lassei')
User2.greet()

const {names} = require('./module')

console.log(names);