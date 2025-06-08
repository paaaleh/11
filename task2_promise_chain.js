// Задание 2: Работа с Promise

function fetchData(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Данные с ${url}`);
        }, 2000);
    });
}

fetchData('https://api.example.com/users')
    .then(data => {
        console.log('Получены пользователи:', data);
        return fetchData('https://api.example.com/user/1');
    })
    .then(userData => {
        console.log('Информация о пользователе:', userData);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
