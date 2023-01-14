// 「Hello world」の文字列をターミナル上に出力しなさい

console.log('Hello world')

// 「Hello world」の文字列を変数に格納して、その変数をターミナル上に出力しなさい

const hoge = 'Hello world'

console.log(hoge)

// 次の二つの文字列の変数を結合して出力しなさい

const hello = 'Hello'
const world = 'World'
const helloworld = hello + world

console.log(helloworld)


// 「3」「7」の二つの数字をそれぞれ変数に格納して、足した値を出力しなさい

const num1 = 3
const num2 = 7

console.log(num1 + num2)

// 次の変数がtrueだった場合「💩」を出力する処理を書きなさい

let isUnko

isUnko = true

if (isUnko) {
    console.log('💩') 
} else {
    console.log('🍠')
}

// isUnkoがfalseの場合「🍠」を出力する処理を書きなさい（上の処理に追加）

isUnko = false

// 「Hello world」の文字を出力する関数を実装して、実行しなさい

function Helloworld(){
    console.log('Hello world')
}

Helloworld()

// 「Hello world」の文字を返す関数を実装して、返り値を変数に格納して出力しなさい

function getHelloworld(){
    return 'Helloworld'
}

const helloworld1 = getHelloworld()

console.log(helloworld1)
// 与えられた引数（文字列）に「です」を足して返す関数を実装しなさい



function getKoji(koji){
    return koji + 'です'
}

let koji=getKoji('koji')

console.log(koji)

// 与えられた引数が「1」なら「one」、「2」なら「two」の文字列を返す関数を作成しなさい

function getNum(num){
    if(num===1){
        return 'one'
    }else{
        return 'two'
    }
}

const outputNum=getNum(2)

console.log(outputNum)

// isUnkoがtrueの場合「💩」、falseの場合「🍠」を返する関数を実装しなさい

const araUnko=false

function getUnko(){
    if(araUnko){
     return '💩'
    }else{
     return '🍠'
    }   
}

const outaraUnko=getUnko()

console.log(outaraUnko)
