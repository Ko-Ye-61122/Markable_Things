// Date() constructor
const dateSnapshot = new Date()
console.log(`Copyright ${dateSnapshot.getFullYear().toString()} all rights reserved.`)


// Error() constructor and throw statement
function checkUsername(userName) {
    if (userName) {
        console.log(userName)
    } else {
        console.log('I execute')
        throw new Error ('No username provided')
        console.log('I do not execute')
    }
}

checkUsername()


String()
Number()
Array()
Object()
Boolean()

const person = new Object()
person.name = 'Tom'
console.log(person)

const car = {}
car.name = 'BMW'
console.log(car)

