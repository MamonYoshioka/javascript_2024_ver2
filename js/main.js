alert("Open Site");
let count = 0;
count = 30;
console.log(count);

// 数値
let number = 0;
console.log(number);
// 文字列
let string = "something";
console.log(string);
/* 
Javascriptは動的型付け言語
変数は状況によって変化する。
つまり、numberという変数に途中で文字列を入れることも可能。
*/

// シングル・ダブル・バッククォート
let userName = "Taro";
let greet = 'Good Morning';
greet = `Hello ${userName}!!`;
console.log(greet);

// 明示的に文字列を数値にする
let userInput = '10.9';
let calc;
calc = parseInt(userInput) + 10;
console.log(calc);
calc = parseFloat(userInput) + 10;
console.log(calc);

// 配列
let fruits = ['apple', 'banana', 'grape'];
console.log(fruits);
console.log(fruits[0]);

let array = [
    [1,2,3],
    ['apple', 'banana', 'grape']
];
console.log(array);
console.log(array[0][0]);
console.log(array[1][0]);

//オブジェクト
/*
オブジェクトってなに？
    → まとまったデータを表す型
*/

const coffee = {
    name: 'Chocolate Mocha',
    size: 500,
};

console.log(coffee.name);
console.log(coffee.size);
coffee.barista = 'Hanako';
console.log(coffee.barista);