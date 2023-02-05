const cars = ["CAMRY", "Surf", "VEZEL", "RAV4", "Rumion"];

// for (let i = 0; i < 5; i++) {
//     console.log(cars[i])
// }

// 配列.map(引数 => {
//     // 処理
// })

const carObj = [
    {
        name: 'CAMRY',
        hoken: true,
    },
    {
        name: 'RAV4',
        hoken: false,
    },
    {
        name: 'Surf',
        hoken: true,
    }
]

// const mapReturnValue = carObj.map(car => {
//     return car.name
// })

// console.log('mapReturnValue: ', mapReturnValue);

// cars.forEach(car => {
//     console.log(car)
// })

const filteredValue = carObj.filter(car => car.hoken).map(car => car.name)

const targetCar = carObj.find(car => car.name === 'CAMRY')

console.log('targetCar: ', targetCar);


const kojiIsUnko = true

// if (kojiIsUnko) {
//     console.log("僕はお花は積みます")
// } else {
//     console.log("僕はうんこなんかじゃない")
    
// }

// kojiIsUnko
//     ? console.log("僕はお花は積みます")
//     : console.log("僕はうんこなんかじゃない")

console.log(kojiIsUnko ? "僕はお花は積みます" : "僕はうんこなんかじゃない")
    
// 三項演算子
// boolean ? Truthyの処理 : Falsyの処理

const user = {
    name: 'koji',
    age: 24,
    birthday: 517,
    nickName: 'unko'
}

// for in loop（オブジェクトのキーをぶん回すやつ）
for (const key in user) {
    console.log(`Koji ${key} is ${user[key]}`)
}

const fruits = ['apple', 'lemon', 'melon', 'kiwi']

// for of loop(配列をぶん回すやつ)
for (const fruit of fruits ) {
    console.log(fruit)
}


// switch 

const name = 'koji'

switch (name) {
    case 'koji':
        console.log('unko')
        break
    case 'yuta':
        console.log('chinko')
        break
    default:
        console.log('manko')
}

// dom（Document Object Model）
// HTMLの要素を取得したりとか、操作することを「DOM操作」と言う