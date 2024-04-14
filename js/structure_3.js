document.write(`hello world`);
document.write(`<br>`);


let count = 0;
while (count < 5) {
    document.write(`<div style="background-color:#cc33ff; color:white;">こんにちは<br></div>`);
    count++;
}

let numberCount = 0;
do {
    document.write(`<div style="background-color:#bfc686;">数値：${numberCount}<br></div>`);
    numberCount++;
} while(numberCount < 10);

/*
do-while文は1回目は必ず実行される。
それに対して、while文は条件にマッチしていなければ、1回目も実行されない。
*/