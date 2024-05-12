document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function(){
        console.log('Hello!!!');
    }, 3000)

    // 練習問題6.10
    // setTimeout( function(){
    //     console.log('こんにちは');
    // }, 3000);

    // const hello = function(){
    //     console.log('こんにちは');
    // }

    // setTimeout(hello, 3000);

    //アロー関数
    setTimeout(() => {
        console.log('こんばんは');
    }, 1000);

    // 練習問題6.11
    const hello = () => {
        console.log('こんにちは');
    }
    hello();

    const double = (num) => {
        return num * 2;
    }
    console.log(double(10));

    setTimeout( (name) =>{
        console.log('こんにちは、' + name);
    }, 5000, '横浜太郎');

    const goodAfternoon = function(){
        return 'こんばんは、' + arguments[0] + 'さん';
    }
    const result = goodAfternoon('aaaaa');

    // setTimeout(function() {
    //     const outputElement = document.getElementById('displayElement');
    //     outputElement.textContent = result;
    // }, 1000);
    setTimeout(function(){
        const outputElement = document.getElementById('displayElement');
        outputElement.textContent = result;
    }, 5000);
});