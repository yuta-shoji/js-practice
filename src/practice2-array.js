const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const length = arr.length

const lastItem = arr[arr.length - 1]

// console.log('length  : ', length);
// console.log('lastItem: ', lastItem);

const fruits = ["apple", "lemon", "melon", "blueberry", "pineapple"];

const apple = fruits[0]
const lemon = fruits[1]
const melon = fruits[2]

const myFruits = [apple, lemon, melon]

const myFruits2 = fruits.slice(1, 5)  // 配列.slice(開始のindex, 終了のindex - 1)

// console.log('myFruits: ', myFruits2);

// console.log('fruits: ', fruits);

function addFruits(fruit) {
    const fruits = ["apple", "lemon", "melon", "blueberry", "pineapple"];
    fruits.push(fruit)
    return fruits
}

const newFruits = addFruits('orange')

// console.log('newFruits: ', newFruits);


const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// const number1 = numbers[1]
// console.log(numbers[1,1])

const answer = numbers[1][1]

const answer2 = [4, 5, 6][1]

console.log(answer)
console.log(answer2)
