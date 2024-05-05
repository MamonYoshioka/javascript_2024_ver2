document.getElementById('nameForm').addEventListener('submit', (event) => {
    //フォームの送信を防ぐために記述
    event.preventDefault();
    const name = document.getElementById('name').value;
    if(name === ''){
        alert('名前を入力してください');
    }else{
        document.getElementById('result').textContent = `こんにちは、${name}さん！`;
    }
});

