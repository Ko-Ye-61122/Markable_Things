const characters = [
    {
        title: 'Ninja',
        emoji: '🥷',
        powers: ['agility', 'stealth', 'aggression'],
    },
    {
        title: 'Sorcerer',
        emoji: '🧙‍♂️',
        powers: ['magic', 'invisibility', 'necromancy'],
    },
    {
        title: 'Ogre',
        emoji: '👹',
        powers: ['power', 'stamina', 'shapeshifting'],
    },
    {
        title: 'Unicorn',
        emoji: '🦄',
        powers: ['flight', 'power', 'purity'],
    } 
]

// for (let character of characters) {
//     console.log(character)
// }

characters.forEach(function(character){
    character.powers.forEach(function(powers){
        console.log(powers)
    })
/*
Challenge:
1. Nest a forEach to log out each individual 
   power in each characters powers array
*/
})

characters.forEach(function(character, index){
    console.log(index, character.title)
})