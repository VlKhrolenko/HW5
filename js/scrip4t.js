//. Дан массив с числами. С помощью цикла найдите сумму элементов этого массива выведите ее в консоль

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Сумма элементов массива:", sum)
