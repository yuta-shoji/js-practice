const person = {
    name: 'koji',
    age: 24,
    gender: 'man',
    isProgrammer: true
}

const key = "age"

// ドット記法
const names = person.key
// ブラケット記法
const names2 = person[key]

console.log('name: ', names);
console.log('names2: ', names2);

person.name = "yuta"

person.birthday = '0517'
console.log(person)



const character = [
    {
        name: "Naruto",
        age: 25,
        skill: rasengan
    },
    {
        name: "Sasuke",
        age: 24,
        skill: "千鳥"
    },
    {
        name: "RockLee",
        age: 27,
        skill: "駅弁"
    },
]

const sasuke = character[1].name
console.log('sasuke: ', sasuke);

character.push({
    name: "garla",
    age: 155,
    skill: 69,
})
console.log('character: ', character);



function rasengan() {
    console.log('らせんガンだってばよ！！！！');
}

character[0].skill()


const pokemon = {
    name: 'pikachu',
    skill: [
        {
            skillName: 'thunderBolt',
            skillType: 'electric',
            useLimit: 10,
        },
        {
            skillName: 'kaminari',
            skillType: 'electric',
            useLimit: 15,
        }
    ],
    type: [
        'fire',
        'water',
        'grass'
    ]
}