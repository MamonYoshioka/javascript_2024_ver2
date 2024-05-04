/*
 =, + : 演算子
 1や2 : オペランド
 この場合は1や2は演算子によって処理される値を指す。
*/

let add = 1 + 2;
console.log(add);

/*
演算子には優先順位がある。
もし、下記のように演算子が同順位の場合は結合性が発動する。
*/

number1 = number2 = 1;

/*
1. number2 = 1の処理が走る
2. number2 に 1という値が返される
3. number1にnumber2で返された値（つまり1）が入る
*/

/*算術演算子
特に注意するのはインクリメントとデクリメントの前置と後置の違いについて。
1. ++オペランド;
2. オペランド++;

1.の場合は結合性のような内容になるが、2.の場合はそのような内容にならず、
元の値に1を足した結果のみが代入されるという処理のみ行われる。

ex )
前置ver.
let a = 0;
let b = ++ a;

a : 1
b : 1

後置ver.
let a = 0;
let b = a++;

a : 1
b : 0
*/


const obj_1 = { };
const obj_2 = { };
console.log(obj_1 === obj_2);

// 三項演算子
(1 === 1) ? console.log('真') : console.log('偽');
(1 === 2) ? console.log('真') : console.log('偽');

// Null合体演算子
let val = null;

val = val ?? "初期値";
console.log(`val: ${val}`);

let number3 = 0;

is_number = number3 ?? "数値が入っていません"
console.log(`数値: ${is_number}`);