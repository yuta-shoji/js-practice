// const greeting = (callback) => {
//     callback()
// }

// const goodMorning = () => {
//     console.log('Good Morning!!')
// }

// const goodAfternoon = () => {
//     console.log('Good Afternoon')
// }

// greeting(goodMorning)

// greeting(goodAfternoon)


const calculate = (callback) => {
    return callback() * 10
}

const add = (num1, num2) => {
    return num1 + num2
} 

// 関数calculateに対して、callback関数（add）を与えて、addの返り値を10倍した数値を出力しなさい。 

const hoge =() => {
    return add(1,2)
}

// console.log(calculate(hoge))

// Error -> 何のエラーか -> どこでエラーが出てるか -> 原因になりそうな場所にcondoleを置いてみる
// -> 一つ一つ解決していって、徐々に深く探っていく -> 原因が発覚する


// ========================================================================================

// 関数getFullNameにcallback関数を二つ与えて、「My name is Koji Tomohiro !!!!!」を返しなさい。

const getFullName = (callback1, callback2) => {
    const name = callback1()
    const exclamations = callback2()
    return `My name is ${name} ${exclamations}`
}

// 与えられた文字列(小文字英数字)の頭文字を大文字にして、つなげて返す関数
const getName = (str1, str2) => {
    const firstName = str1.charAt(0).toUpperCase() + str1.slice(1)
    const lastName = str2.charAt(0).toUpperCase() + str2.slice(1)
    return `${firstName} ${lastName}`
}

// 与えられた数だけ「!」の文字列を組み合わせて返す関数
const getExclamations = (num) => {
    let result = ''
    for (let i = 0; i < num; i++) {
        result += '!'
    }
    return result
}

const getNum = () => {
    return getExclamations(5)
}

const getKoji = () => {
    return getName("koji","tomohiro")
} 

const getKoji2 = () => getName("koji","tomohiro")

// console.log(getFullName(getKoji,getNum))

// console.log(getFullName(() => getName("koji","tomohiro"), () => getExclamations(5)))


function test() {
    const expect = '!!!!!!!'
    const actual = getExclamations(7)

    const result = expect === actual
    console.log(result)
}

function test2() {
    const expect = '!!!!!!!!!!'
    const actual = getExclamations(10)

    const result = expect === actual
    console.log(result)
}

test()
test2()

const numbers = [1, 2, 3, 4, 5]
