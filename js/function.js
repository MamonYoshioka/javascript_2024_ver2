document.addEventListener('DOMContentLoaded', function() {
        /*
    【関数宣言文】
    関数宣言文は、以下のように関数の名前とその実行ブロックを指定して関数を定義します。
    function hello() {
        console.log("こんにちは");
    }

    <特徴>
    関数名が必須です。
    関数の巻き上げ（Hoisting）が行われます。 
    これは、関数宣言がコード内のどこにあっても、
    スクリプトの実行前にJavaScriptエンジンによってメモリにロードされることを意味します。
    そのため、関数宣言より前にその関数を呼び出すことができます。
    */

    function add(a, b){
        return a + b;
    }

    console.log(add);
    console.log(add.name);
    console.log(add.length);


    /*
    【関数式】
    関数式では、関数を変数に割り当てる形で定義します。
    これは匿名関数（名前のない関数）を使用することも、名前付き関数を使用することもできます。

    関数式は関数宣言文と異なり、変数を作り出すことはできない。
    オブジェクトのみを作っている。
    */
    let sayHi = function(name){
        return 'Hi!!' + name;
    }

    console.log(sayHi('Jhon'));

    /*
    まとめ
    関数宣言文は、関数全体が巻き上げられるため、定義前に呼び出すことが可能です。
    関数式は、変数の巻き上げのみが行われるため、実際に関数が割り当てられる行が実行されるまで関数としては機能しません。
    どちらの方法もJavaScriptで広く使われていますが、使用するシナリオによって選択が異なります。
    */

    function sum(val1, val2){
        return val1 + val2;
    }

    let result = sum(100, 200);


     // テキスト要素を取得して結果を表示
     let displayElement = document.querySelector('#resultDisplay');
     if (displayElement) {
         displayElement.textContent = '計算結果: ' + result;
     } else {
         console.error('要素が見つかりません。');
     }

    // 練習問題6.1
    function multiply(val3, val4){
        return val3 * val4;
    }

    console.log(multiply(7, 9));
    console.log(multiply(-11, 9));

    // 練習問題6.2
    function noArgumentFund(){
        return '引数がない関数です。';
    }

    console.log(noArgumentFund());
    console.log(multiply(2, 3, 10));

    function twoArgumentFund(arg1, arg2){
        console.log('arg1:', arg1);
        console.log('arg2:', arg2);
    }

    let arg_reuslt = twoArgumentFund(1);
    console.log(arg_reuslt);

    // 練習問題6.3
    function hello(){
        return 'Hello World';
    }

    console.log(hello());

    function greet(personName){
        if (typeof personName !== 'string'){
            console.log('引数に文字列を渡してください');
        }else{
        return `こんにちは${personName}`;
        }
    }

    let greet_result = greet(1111)
    console.log(greet_result);

    // 関数式
    const minus = function(value1, value2){
        return value1 - value2;
    }

    let minus_result = minus(100, 90);
    let minus_displayElement = document.querySelector('#minus_resultDisplay');
    if (minus_displayElement) {
        minus_displayElement.textContent = '計算結果: ' + minus_result;
    } else {
        console.error('要素が見つかりません。');
    }

    // 練習問題6.4　関数宣言と関数式の違いについての問題

    console.log(good_morning());
    function good_morning(){
        return 'おはようございます';
    }

    // console.log(good_morning_everyone());
    const good_morning_everyone = function(){
        return 'おはよう諸君';
    }
    // console.log(good_morning_everyone());

    // デフォルト引数
    function plus(num1, num2 = 10){
        if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            alert('問題が発生しました。再度、確認をお願いします。');
        }else{
            return num1 + num2;
        }
        
    }

    let plus_result = plus(8);
    let plus_displayElement = document.querySelector('#plus_resultDisplay')
    plus_displayElement.textContent = '計算結果：' + plus_result;
    

    // 練習問題6.4 円の面積を求める問題
    const  calcAreaOfCircle = (radius, pi = 3) => {
        return pi * radius ** 2;
    }
    let circle = calcAreaOfCircle(5);
    let circleAreaElement = document.querySelector('#circleArea_resultDisplay');
    circleAreaElement.textContent = '円の面積：' + circle;


    // 引数が複数存在する関数
    // function fn(argument1 = '初期値1', argument2 = '初期値2'){
    //     console.log(argument1, argument2);
    // }

    // fn(undefined, '引数2');

    // function fn( obj ){
    //     obj.argument1 ??= '初期値1';
    //     obj.argument2 ??= '初期値2';

    //     console.log(obj.argument1,obj.argument2);
    // }

    // const params = {argument2: '引数2'};
    // fn(params);

    // 練習問題6.5
    const obj1 = {num : 3};
    const obj2 = {num : 3};
    let num = 3;

    function fn(object1Arg, object2Arg, numberArg){
        object1Arg = {num : 5};
        object2Arg.num = 5;
        numberArg = 5;
    }

    fn(obj1, obj2, num);

    console.log(obj1.num);
    console.log(obj2.num);
    console.log(num);

    // コールバック関数
    function fn(){}
    fn.fullName = 'あいうえお';

    fn.greet = () => {
        console.log('こんにちは かきくけこ');
    }

    console.log(fn.fullName);
    fn.greet();

    // 練習問題6.7
    function greeting(name){
        console.log(`こんにちは、 ${name}さん`);
    }

    const obj = greeting;
    obj('aaaaaa');

    function saySomething(callback){
        const result = callback();
        console.log(`${result}、みんな。`);
    }

    function hello(){
        return 'Hello';
    }

    function bye(){
        return 'Bye';
    }
    // コールバック関数表示
    saySomething(hello);
    saySomething(bye);
    
    /*コールバック関数を引数に取る組み込み関数
        組み込み関数：Javascriptエンジンによって準備されている関数
        組み込み関数の中にもコールバック関数を引数にとる関数がある
    */

    function goodNight(){
        console.log('おやすみなさい');
    }

    // setTimeout(goodNight, 3000);

    // 練習問題6.8
    function hello(){
        console.log('こんにちは');
    }

    // setTimeout(hello, 5000);

    // コールバック関数に引数を渡す
    function goodAfternoon(name){
        console.log('こんばんは' + name + 'さん');
    }

    setTimeout(goodAfternoon, 5000, 'Tom');

    // 練習問題6.9
    function plus(a, b) {return '計算結果は' + (a + b);}
    // function minus2(a, b) {return a - b;}

    function calc(val1, val2, callBack){
        return callBack(val1, val2);
    }

    const add_result = calc(1, 2, plus);
    console.log(add_result); 


   
});

