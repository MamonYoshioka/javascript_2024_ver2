/*
try-catch文は予期せぬエラーが発生する場合のみ記述する。
下記のようなわかりやすい、使用されていない関数を記述すること基本的に良くない。

今回は学習のため記述している。
*/

try{
    console.log(coffee);
}catch{
    console.log('good morning');
}
console.log('hello');