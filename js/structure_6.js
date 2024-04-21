/*

*/

const tea = {
    name: 'Green tea',
    price: 380,
    is_ice: true
}

for (const key in tea) {
    document.write(`${key}:&nbsp${tea[key]}<br>`);
}