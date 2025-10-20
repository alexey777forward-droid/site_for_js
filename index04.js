// есть 8 основных типов данных
// number, bigint, string, boolean, null, undefined, symbol, object

// Number числа
const age = 28;
console.log(typeof age);

// String строка слова тест
const firstName = 'Alex Za';
console.log(typeof firstName);

// bigint большое число произвольной длины
const bigNumber = 1231241212421422223243242n;
console.log(typeof bigNumber);

// boolean либо да либо нет :) доступ открыт или доступ закрыт
const isActive = true;
const isConfirmed = false;
console.log(typeof isActive);

// null пусто или ничего
const city = null;
console.log(typeof city); // Для null возвращается "object" – это ошибка в языке, на самом деле это не объект.

// undefined неопределено или отсутствие значения
let isLoading; 
console.log(isLoading); // undefined
console.log(typeof isLoading); // undefined
isLoading = false;

// symbol для уникальных идентификаторов в объектах
const id = Symbol('123');
console.log(typeof id);

// Ссылочные типы | Reference Types
// object
const person = {
    name: 'Alex', // нэйм это ключ объекта, алекс это значение объекта
    age: 37,
}
console.log(person);
console.log(typeof person);

const numArr = [1,2,3,4,5]; // массив
console.log(numArr);
console.log(typeof numArr);

function info() {
    return 'Hello World!';
}
console.log(typeof info) // function

// в JavaScript по сути всё объект
console.log(Number.prototype);
console.log(Object.getOwnPropertyNames(Number.prototype));