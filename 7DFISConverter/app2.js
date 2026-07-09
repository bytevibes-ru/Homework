// Задача 4.

function convert (summ, val1, val2) {
    switch(true) {
        case val1 === 'руб' && val2 === '$':
            return summ / 30;
        case val1 === '$' && val2 === '€':
            return summ / 3;
        case val1 === 'руб' && val2 === '€':
            return summ / 45;  
        case val1 === '€' && val2 === '$':
            return summ / 5;
        default:
            return null;   
    }
}
console.log(convert(1000, 'руб', '$'));






