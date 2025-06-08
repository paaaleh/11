// Задание 1: Понимание Event Loop

console.log('Синхронный код 1');

setTimeout(() => {
    console.log('setTimeout 1');
}, 0);

Promise.resolve().then(() => console.log('Promise 1'));

console.log('Синхронный код 2');

/*
Порядок выполнения:
1. Выполняется синхронный код: 'Синхронный код 1' и 'Синхронный код 2'.
2. Затем microtask из Promise: 'Promise 1'.
3. Затем macrotask из setTimeout: 'setTimeout 1'.
*/
