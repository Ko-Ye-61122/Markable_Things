// const getSpendAlert = function(amount){
//     return `Warning! You just spent £${amount}!`
// }

// const getSpendAlert = (amount) => {
//     return `Warning! You just spent £${amount}`
// }

// const getSpendAlert = amount => {
//     return `Warning! You just spent £${amount}`
// }

// const getSpendAlert = () => {
//     return `Warning! You just spent some moneyt!`
// }

// const getSpendAlert = (name,amount) => {
//     return `Warning! Hey ${name}! You just spent £${amount}`
// }

// const getSpendAlert = (name,amount) => `Warning! Hey ${name}! You just spent £${amount}`

// const getSpendAlert = amount => `Warning! You just spent £${amount}`

const getSpendAlert = amount => {
    if (amount > 50) {  
        return `Warning! You just spent £${amount}`
    }
}

console.log(getSpendAlert(150))

// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

// const speedWarning = speed => `You are going at ${speed} mph!`

const speedWarning = (speedLimit,speed) => {
    if (speed > speedLimit){
        return `You are going at ${speed} mph!`
    }
}

console.log(speedWarning(30, 40))


// Inline Arrow Function  
const distanceTraveledMiles = [267, 345, 234, 190, 299]

// const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//     return Math.round(distance * 1.6)
// })

const distanceTraveledKm = distanceTraveledMiles.map(distance => Math.round(distance * 1.6 ))

console.log(distanceTraveledKm)