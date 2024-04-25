/*
オブジェクトの繰り返し処理を行う際に使用する
また、配列もオブジェクト一種のため、for-inを使用できるが、
基本的には配列などのオブジェクトを繰り返し処理したい場合はfor-of文を使うのが一般的
*/

const tea = {
    name: 'Green tea',
    price: 380,
    is_ice: true
}

for (const key in tea) {
    document.write(`${key}:&nbsp${tea[key]}<br>`);
    if (key === 'price') {
        document.write('break!');
        break;
    }
}

const coffee = {
    name: 'Black coffee',
    price: 300,
    is_hot: true,
}

for (const key in coffee) {
    if(key === 'price'){
        document.write('continue!!');
        continue;
    }
    document.write(`<br>${key}:&nbsp${tea[key]}<br>`);
}