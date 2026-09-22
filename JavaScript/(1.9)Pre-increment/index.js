let currentTicketNumber = 0

function getNextTicketNumber() {
    // return currentTicketnumber++  //normal increment
    return ++currentTicketNumber  //pre-increment
    // return --currentTicketnumber //pre-decrement
}

console.log(`Guest 1, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 2, your ticket number is: ${getNextTicketNumber()}`)
console.log(`Guest 3, your ticket number is: ${getNextTicketNumber()}`)