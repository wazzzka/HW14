/*
Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:

﻿sum(3) = 3 

sum(5) = 8

sum(20) = 28
*/


function createSum() {
    let totalAmount = 0;

    return function (num) {
        totalAmount += num;
        return totalAmount;
    };
}

const sum = createSum();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28