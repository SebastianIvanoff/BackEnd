class User {
constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}
greet() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}
}

// const user = new User('Sebbe', 'Ivanoff')
// console.log(user);
// user.greet()

module.exports = User