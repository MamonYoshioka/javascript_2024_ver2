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

