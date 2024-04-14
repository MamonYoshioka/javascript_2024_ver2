// function vegetableColor (vegetable){
//     if(vegetable === 'tomato') {
//         console.log('Tomato is red!!');
//     }else if(vegetable === 'pumpkin') {
//         console.log('Pumpkin is orange!!');
//     }else if(vegetable === 'onion') {
//         console.log('Onion is white!!');
//     }
// }

// vegetableColor('onion');


/*
以下のswitch文は関数の中に入っているので、
"break;"ではなく、"return;"でも代用可能。
*/
function vegetableColor (vegetable){
    switch (vegetable) {
        case 'tomato': {
                const message = `Tomato is red.`;
                console.log(message);
                break;
        }
            
        case 'carrot':
        case 'pumpkin':{
            const message = `${vegetable} is orange.`;
            console.log(message);
            break;
        }
        case 'onion':{
            const message = `Onion is white`;
            console.log(message);
            break;
        }
        default:{
            const message = `Not found...`
            console.log(message);
            break;       
        }
    }
}

vegetableColor('apple');