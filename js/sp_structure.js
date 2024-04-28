/*
アロー関数；　=>(矢)を使って関数リテラルを記述する方法
モジュール；関連した機能を持った変数や関数を一つのまとまりにした記
*/

import { hello, add } from "./module.js"

hello();

// コールバック関数
function print(callBack){
    const result = callBack(5);
    console.log(result);
}

print(add);
