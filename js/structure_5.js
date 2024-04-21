
/*
for of文は基本的に繰り返し可能なオブジェクト、
配列や文字列を入れる。

純粋なオブジェクト（{}）で表現するようなオブジェクトは入れることはできない。
*/

let fruits = ['apple', 'orange', 'grape', 'banana'];

for (const fruit of fruits) {
    document.write(fruit + '<br>');
}