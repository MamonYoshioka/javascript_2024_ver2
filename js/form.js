function InputCheck() {
    if(document.regist.username.value == '' || document.regist.phone.value == ''){
        alert('項目が未入力です。再度入力してください。');
        return false;
    }else{
        return true;
    }
}