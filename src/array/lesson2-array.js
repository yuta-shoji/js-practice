// 1, 2, 3, 4, 5の数値を格納する配列を宣言しなさい

const arr =[1,2,3,4,5]

// a, b, c, d, eの文字列を格納する配列を宣言しなさい

const str =["a","b","c","d","e"] 

// 次の配列の一番最初の要素のindexは何ですか？

const fruitsBasket = ["apple", "lemon", "melon", "blueberry", "pineapple"];
//0desu


// 配列fruitsBasketの要素数を取得し出力しなさい

const yousosu = fruitsBasket.length

console.log(yousosu)

// 配列fruitsBasketの最初の要素を取り出して出力しなさい

const first = fruitsBasket[0]

console.log(first)

// 配列fruitsBasketの最後の要素を取り出して出力しなさい


console.log(fruitsBasket[yousosu - 1])

// 配列fruitsBasketの最初に orange を追加しなさい

fruitsBasket.unshift("orange")

console.log(fruitsBasket)

// 配列fruitsBasketの最後に kiwi を追加しなさい

fruitsBasket.push("kiwi")

console.log(fruitsBasket)
// 次の配列の最初の要素を削除し、その配列を出力しなさい

const cars = ["camry", "surf", "vezel", "landCruiser", "rumion"];

cars.shift()

console.log(cars)
// 配列carsの最後の要素を削除し出力しなさい

cars.pop()

console.log(cars)

// 次の配列の要素のうち、先頭から3つ目までの3つのスイーツを抽出した新たな配列を宣言し、出力しなさい

const sweets = ["cake", "pudding", "iceCream", "parfait", "halohalo"];

const sweets2 = sweets.slice(0,3)

console.log(sweets2)

// 配列sweetsのうち、最後から2つ目までの2つのスイーツを抽出した新たな配列を宣言し、出力しなさい

const sweets3 = sweets.slice(3,5)

console.log(sweets3)

// 与えられた配列の最初の要素を返す関数 getFirst を宣言して実行しなさい

function getFirst(arr){
    return arr[0]
}

const swfr = getFirst(sweets)

console.log(swfr)

// 与えられた配列の最後の要素を返す関数 getLast を宣言して実行しなさい

function getLast(arr){
    
    const len = arr.length-1
    
    return arr[len]
}

const swls = getLast(sweets)

console.log(swls)

// 与えられた配列の最後に jelly の文字列を追加して返す関数 add を宣言して実行しなさい

function add(arr){
    
    arr.push("jelly")
    
    return arr
}

const swpu = add(sweets)

console.log(swpu)