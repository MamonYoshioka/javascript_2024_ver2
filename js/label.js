const Coffee = {
    menu: 'Ice Coffee',
    price: 350,
    size : 300
}


coffeeCondition: if (true) {
    for(const key in Coffee){
        if(key == 'price'){
            console.log('break');
            // break coffeeCondition;
            break;
        }
        console.log(key);
        console.log(Coffee[key]);
    }
    console.log('--------- Hello ---------');
}