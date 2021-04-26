1;

// function checkAge(age) {
//   if (age >= 18) {
//     // Дополни эту строку
//     return 'Вы совершеннолетний человек';
//   }

//   return 'Вы не совершеннолетний человек';
// }

2;

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки

//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }
//   return 'Доступ запрещен, неверный пароль!';

//   // Пиши код выше этой строки
// }

3;

// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   }
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//   return 'Заказ оформлен, с вами свяжется менеджер';

//   // Пиши код выше этой строки
// }

4;

// Пиши код ниже этой строки

// Пиши код ниже этой строки

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин']

5;

// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.table(fruits);

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

6;

// Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки

// fruits[1] = 'персик';
// fruits[3] = 'банан';

// console.log(fruits);

7;

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length

8;

// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

9;

// function getExtremeElements(array) {
//   // Пиши код ниже этой строки

//   const deletedArray = array.splice(1, array.length - 2);

//   return array;
// }

10;

// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   words = message.split(delimeter);

//   // Пиши код выше этой строки
//   return words;
// }

11;

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   let total = message.split(' ').length * pricePerWord;

//   return total;
//   // Пиши код выше этой строки
// }

12;

// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Пиши код ниже этой строки

//   string = array.join(delimeter);

//   // Пиши код выше этой строки
//   return string;
// }

13;

// function slugify(title) {
//   //   // Пиши код ниже этой строки

//   let slug = title.toLowerCase().split(' ').join('-');

//   return slug;
//   //   // Пиши код выше этой строки
// }

14;

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls);

15;

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

16;

// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки

//   const allArray = firstArray.concat(secondArray).slice(0, maxLength);

//   return allArray;
//   // Пиши код выше этой строки
// }

17;

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Дополни эту строку
//   console.log(i);
// }

18;

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let result = 0;
//   for (let i = 1; i <= number; i += 1) result += i;

//   return result;

//   // Пиши код выше этой строки
// }

19;

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

20;

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (let i = 0; i < order.length; i += 1) {
//     //   console.log(i);\

//     total += order[i];
//   }
//   // Пиши код выше этой строки
//   return total;
// }

21;

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   let total = [];
//   string = string.split(' ');

//   for (const word of string) {
//     if (word.length >= total.length) {
//       total = word;
//     }
//   }
//   return total;

//   // Пиши код выше этой строки
// }

22;

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(29, 34));

23;

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let result = [];

//   for (const number of numbers) {
//     if (number > value) {
//       result.push(number);
//     }
//   }
//   return result;

//   // Пиши код выше этой строки
// }

24;

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// console.log(checkFruit('Груша'));
// console.log(checkFruit('яблоко'));

25;

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let result = [];
//   for (const array of array1) {
//     if (array2.includes(array)) {
//       result.push(array);
//     }
//   }
//   return result;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

26;

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const number of order) {
//     total += number;
//   }

//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

27;

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

28;

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(e);

29;

// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   let result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       result.push(i);
//     }
//   }

//   return result;
//   // Пиши код выше этой строки
// }

30;

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

31;

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
//   // Пиши код выше этой строки
// }

32;

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   for (let i = 0; i <= array.length; i += 1) {
//     if (array[i] !== value) {
//       return false;
//     }
//   }
// }

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (const arr of array) {
//     if (arr === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(
//   includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
// );

// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));

// console.log(includes([1, 2, 3, 4, 5], 17));
