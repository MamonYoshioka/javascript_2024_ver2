/*
【メソッド】
メソッドは、オブジェクトに紐づいた関数のことを指します。
また、違う言い方ではsayHiプロパティとも言います。

プロパティ：key-valueのセット
*/

const person = {
    name: 'Jhon',
    age: 20,
    sayHi: function(){
        return `こんにちは、${this.name}さん。`;
    }
}

console.log(person.sayHi());

/*
【無名関数】
無名関数は、名前がない関数です。

無形関数は下記の２通りの記載方法がある
1.function(){}で記載する方法
let 変数名 = function(){
    // 処理
}

2.アロー関数での記載方法
let 変数名　= () => {
    // 処理
}
*/

//functionでの記載
let greet_1 = function(name){
    return `おはようございます、${name}さん。`;
}

console.log(greet_1('田中'));

//アロー関数での記載
let greet_2 = (name) => {
    return `おはようございます、${name}さん。`;
}

console.log(greet_2('田中'));

