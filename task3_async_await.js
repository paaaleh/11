// Задание 3: Работа с async/await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData(url) {
    await delay(2000);
    return `Данные с ${url}`;
}

async function run() {
    try {
        const users = await fetchData('https://api.example.com/users');
        console.log('Получены пользователи:', users);
        const userData = await fetchData('https://api.example.com/user/1');
        console.log('Информация о пользователе:', userData);
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

run();
