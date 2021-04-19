// consolse.log(true || 'false');

// const globalMinutes = 90;

// const hours = Math.floor(globalMinutes / 60);

// const modifiedHours = String(hours).padStart(2, 0);

// const minutes = globalMinutes % 60;

// const modifiedMinutes = String(minutes).padStart(2, 0);

// const time = `${modifiedHours}:${modifiedMinutes}`;

// console.log(time);

// const min1 = 10;
// const max1 = 100;

// for (let i = min1; i <= max1; i++) {
//   console.log(i);
// }

// for (let i = max1; i >= min1; i--) {
//   console.log(i);
// }

// const num1 = 2;
// const num2 = 10;

// // for (let i = num1; i <= num2; i++) {
// //   if (i % 2 === 0) {
// //     console.log(i);
// //   }
// // }

// for (let i = num1; i <= num2; i += 2) {
//   console.log(i);
// }

// let input = prompt('Введите число больше 100');
// let check = false;
// do {
//   if (Number(input) < 100) {
//     check = true;
//     input = prompt('Введите число больше 100');
//   } else {
//     check = false;
//   }
// } while (check);

// const loginInput = prompt('Введите свой логин')

// if (loginInput === 'Админ') {
//     const passwordInput = prompt('Введите свой пароль');
//     if (passwordInput {
//         if (passwordInput === 'Я главный') {
//             console.log('Здравствуйте!');

//         } else {
//             console.log('Неверный пароль')
//         } else {
//         console.log('Отменено')
//     } else {
//         console.log('Я вас не знаю')
//     }
// }

// 1.
// Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем строку из дней недели на русском языке, а если имеет значение 'en' – то на английском. Решите задачу через 2 if, через switch-case.

// "пн, вт, ср, чт, пт, сб, вс"
// "mn, ts, wd, th, fr, st, sn"

// const lang = 'ru';
// let arr = '';
// const daysRu = 'пн, вт, ср, чт, пт, сб, вс';
// const daysEn = 'mn, ts, wd, th, fr, st, sn';

// if (lang === 'ru') {
//   arr = daysRu;
// } else if ((lang === 'en')) {
//   arr = daysEn;
// }
// console.log(arr);

// const lang = 'ru';
// let arr = '';
// const daysRu = 'пн, вт, ср, чт, пт, сб, вс';
// const daysEn = 'mn, ts, wd, th, fr, st, sn';

// switch (lang) {
//     case 'ru':
//         arr = daysRu;
//         break;
//     case 'en'
//         arr = daysEn;
//     default:
//         arr = 'Такого языка мы не знаем'
// }
// console.log(arr)

// 3.
// Написать скрипт, который запрашивает 2 числа, начало и конец диапазона, и в результате выдаёт сумму всех нечетных чисел в этом диапазоне.

// const min = 1;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     total = total + i;
//     console.log(i);
//   }
// }

// console.log('Общая сумма', total);

// 4. Дано произвольное целое число n. Написать программу, которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321
// */

// const n = 123;

// const nStr = n.toString();
// console.log(nStr);
// let total = 0;

// for (let i = 0; i < nStr.length; i += 1) {
//   console.log(nStr[i]);
// }
// console.log('цифр в числе =', nStr.length);

// for (let i = 0; i < nStr.length; i += 1) {
//   total += Number(nStr[i]);
// }
// console.log('Total', total);

// for (let i = nStr.length - 1; i >= 0; i += 1) {
//   console.log(typeof nStr[i]);

//   totalResult = +nStr[i];
// }
// console.log(totalResult);

// 7. Требуется написать код, который выводит в консоль числа от 1 до n, где n — это целое число, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

// const start = 25;

// for (let i = 1; i <= start; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('fizzbuzz');
//   } else if (i % 3 === 0) {
//     console.log('fizz');
//   } else if (i % 5 === 0) {
//     console.log('buzz');
//   } else {
//     console.log(i);
//   }
// }

// 8. Нужно написать скрипт, который проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// let word1 = 'Пила';
// let word2 = 'Липа';
// let message = '';

// word1 = word1.toLocaleLowerCase();
// word2 = word2.toLocaleLowerCase();

// if (word1.length !== word2.length) {
//   message = 'Не аннограмма';
// } else {
//   let newWord1 = '';

//   for (let i = 0; i <= word1.length - 1; i += 1) {
//     if (word2.includes(word1[i])) {
//       let newWord2 = '';
//       for (let j = 0; j <= word2.length - 1; j += 1) {
//         if (word1[i] === word2[j]) {
//           continue;
//         }
//         newWord2 += word2[j];
//       }
//       word2 = newWord2;
//     } else {
//       message = 'Не аннограмма';
//       break;
//     }
//     if (word2 === '') {
//       message = 'Это анаграмма';
//     }
//   }
// }
// console.log(message);

// let word1 = 'Ярикзачемтытак';
// let word2 = 'Кирячезамтыкат';
// let message = '';

// word1 = word1.toLowerCase();
// word2 = word2.toLowerCase();

// if (word1.length !== word2.length) {
//   message = 'Не анаграмма';
// } else {
//   let newWord1 = '';

//   for (let i = 0; i <= word1.length - 1; i += 1) {
//     console.log(word1[i]);
//     console.log(word2);
//     if (word2.includes(word1[i])) {
//       let newWord2 = '';
//       for (let j = 0; j <= word2.length - 1; j += 1) {
//         if (word1[i] === word2[j]) {
//           newWord2 = newWord2 + word2.slice(j + 1);
//           break;
//         }
//         newWord2 += word2[j];
//       }
//       word2 = newWord2;
//     } else {
//       message = 'это не анаграмма';
//       break;
//     }
//     if (word2 === '') {
//       message = 'Это анаграмма';
//     }
//   }
// }
// console.log(message);

// Репета видео 2

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 12;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + maxSalary,
//   );
//   console.log(`ЗП работника номер ${i} - `);

//   totalSalary += salary;
// }

// console.log('totalSalary:', totalSalary);

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   //   console.log(i);

//   if (i % 2 !== 0) {
//     console.log('не чётное: ', i);
//     continue;
//   }
//   console.log('чётное: ', i);

//   total += i;
// }

// console.log('total: ', total);

// let balance = 10000;
// const payment = 2000;

// if (balance >= payment) {
//   console.log('ok');

//   balance -= payment;
//   console.log(balance);
// }
