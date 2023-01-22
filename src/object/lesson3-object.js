// 「title, description, memo」のキーを持つオブジェクトを定義しましょう



// オブジェクトpersonからkey「name」に該当するvalueを、ドット記法を使って取得しましょう

const person = {
    name: 'koji',
    age: 24,
    gender: 'men',
    isProgrammer: false
}



// オブジェクトpersonからkey「age」に該当するvalueを、ブラケット記法を使って取得しましょう



// オブジェクトpersonの「isProgrammer」に該当するvalueを「true」に書き換えましょう



// オブジェクトpersonにプロパティ「birthday: 5/17」を追加しましょう



// オブジェクトの配列pokemonsから、「ピカチュウ」を取得し、鳴き声を出力しましょう

const pokemons = [
    {
        name: 'ピカチュウ',
        type: 'でんき',
        meow: 'ぴっぴかちゅー'
    },
    {
        name: 'ポッチャマ',
        type: 'みず',
        meow: 'ぽちゃぽちゃあ'
    },
    {
        name: 'ディグダ',
        type: 'じめん',
        meow: 'でぃぐでぃぐう'
    },
]



// 配列pokemonsに、好きなポケモンを追加しましょう



// 配列pokemonsの中のピカチュウに、プロパティ「specialSkill」を追加して、そのvalueに関数「thunderBolt」を追加しましょう

function thunderBolt() {
    console.log('         ⚡️   ');
    console.log('       ⚡️⚡️   ');
    console.log('     ⚡️⚡️⚡️   ');
    console.log('   ⚡️⚡️⚡️⚡️   ');
    console.log(' ⚡️⚡️⚡️⚡️⚡️   ');
    console.log('     ⚡️⚡️⚡️⚡️⚡️ ');
    console.log('    ⚡️⚡️⚡️⚡️ ');
    console.log('   ⚡️⚡️⚡️  ');
    console.log('  ⚡️⚡️  ');
    console.log(' ⚡️     ');
}

thunderBolt()