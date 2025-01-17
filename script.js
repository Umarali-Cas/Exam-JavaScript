// 1) Создайте функцию, которая принимает массив строк и возвращает массив тех же строк, но с заглавной буквы в начале.
// Пример:

// console.log(capitalizeWords(["hello", "world"]));  
// // ["Hello", "World"]

const words = ["hello", "worlds"];

const capitalizeWords = (txt) => {
    const maped = txt.map((value, index) => {
        let firstLetter = value[0].toUpperCase()
        let all = firstLetter + value.slice(1)
        return all
    });
    return maped
}

console.log(capitalizeWords(words));


// 2) Напишите функцию, которая принимает объект и возвращает массив ключей объекта.
// Пример:

// const obj = { name: "John", age: 25, city: "New York" };  
// console.log(getObjectKeys(obj));  
// // ["name", "age", "city"]

const obj = {
    name: "John",
    age: 25,
    city: "New York",
};

function getObjectKeys(object) {
    let key = Object.keys(object)
    return key;
}

console.log(getObjectKeys(obj));


// 3) Создайте функцию asyncOperation(arr), которая принимает массив чисел и возвращает промис. Промис:
// Резолвится с массивом квадратов чисел через 2 секунды.
// Реджектится, если хотя бы один элемент не является числом.
// Пример:

// asyncOperation([1, 2, 3])  
//   .then((result) => console.log(result))  
//   .catch((error) => console.error(error));  
// // Через 2 секунды: [1, 4, 9]  

// asyncOperation([1, "two", 3])  
//   .then((result) => console.log(result))  
//   .catch((error) => console.error(error));  
// // Ошибка: Все элементы должны быть числами.

const asyncOperation = (num) => {
    let answer = [];
    num.forEach(element => {
        if (typeof element === "number") {
                const calc = element ** 2
                answer.push(calc);
        } else {

        }
    });
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(answer)
        }, 2000)
    })
}

asyncOperation([1, 2, 3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err)
});