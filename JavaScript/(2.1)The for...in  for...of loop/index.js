const character1 = {
    title: 'Ninja',
    emoji: '🥷',
    powers: ['agility', 'stealth', 'aggression'],
}

for (let property in character1) {
    console.log(character1[property])
}

const character = 'ninja'

for (const letter of character) {
    console.log(letter)
}