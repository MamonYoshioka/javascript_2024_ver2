let ok = false;
if(ok) {
    console.log('OK!');
}else{
    console.log('No...');
}

// 同値演算子
numCheck = 1 === 1;
console.log(numCheck);
numCheck = 1 !== 2;
console.log(numCheck);

// 等値演算子
numCheck = 1 == 1;
console.log(numCheck);

/*
等値演算子は比較判断緩め。
なので、基本的には同値演算子の方が使用頻度高め。
ただ、オブジェクトの比較した際に、falseを返すことがある！
*/

const coffee1 = {name : 'Coffee'}
const coffee2 = {name : 'Coffee'}
comparison = coffee1 === coffee2;

console.log(`この結果は '${comparison}' です！`);

const coffee3 = coffee1;
comparison = coffee1 === coffee3;

console.log(`この結果は '${comparison}' です！`);



// 比較演算子
numberComparison = 1 > 0;
console.log(numberComparison);

stringComparison = 'a' < 'b';
console.log(stringComparison);

// 論理演算子
logical_operators = true && false;
console.log(`この論理積は'${logical_operators}'です！`);

logical_operators = true || false;
console.log(`この論理和は'${logical_operators}'です！`);

userInput = '';
userName = userInput || 'Please Your Name';
console.log(userName);

// null合体演算子
/*
null合体演算子は並列して論理演算子と使うとエラーになる。
*/
let usr_name = '' ?? 'Please Your Name!!';
console.log(usr_name);

// 文と式、ブロック文
/*
式：値を生成し、変数に代入できるものです
例）1 + 1

文：ある特定の処理を行うための1工程。
つまり、文の末尾にはセミコロン;を使用し、それによって文を区切ることができるもの。
例）const isTrue = true; 
*/

let text = 'abcde';
if(text === 'abcde'){
    console.log(`Hello ${text}`);
}

const hello = 'Hello2';
{
    // console.log(hello);
    /*
    ブロック文の場合、変数宣言前に変数を呼び出すと、
    下記のようなエラーになる。

    "ReferenceError: Cannot access 'hello' before initialization"
     */
    const hello = 'Hello1';
    console.log(hello);
}

// 三項演算子
let is_true = true;
is_true = is_true ? 'True' : 'False';

console.log(is_true);