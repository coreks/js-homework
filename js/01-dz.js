// 1

// const productName = 'Droid';

// console.log(productName);

// const pricePerItem = 2000;

// console.log(pricePerItem);

// 2;

// // Start code
// let productName = 'Droid';
// let pricePerItem = 2000;

// // Write your code under this line

// productName = 'Repair droid';
// pricePerItem = 2000 + 1500;

// console.log(productName);
// console.log(pricePerItem);

// 3;

// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// const isOnline = true;
// const isAdmin = false;

// console.log(topSpeed);
// console.log(distance);
// console.log(login);
// console.log(isOnline);
// console.log(isAdmin);

// 4;

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice);

// 5;

// const productName = 'Дроид';
// const pricePerItem = 3500;

// const message = `Вы выбрали ${productName}, цена за штуку ${pricePerItem} кредитов`;

// console.log(message);

// 6;

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

// console.log(pricePerDroid);
// console.log(orderedQuantity);
// console.log(deliveryFee);
// console.log(totalPrice);
// console.log(message);

// 7;

// function sayHi() {
//   console.log('Привет, это моя первая функция!');
// }

// sayHi();

// 8;

// function add(a, b, c) {
//   console.log(`Результат сложения равен ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// 9;

// function add(a, b, c) {
//   return a + b + c;
//   console.log('${ a + b + c}');
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 10

// function makeMessage (name, price) {
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов` ;
//   return message;
// };

// 11;

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// }

// 12;

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const message = `Вы заказали дроидов на сумму ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   return message;
// }

// 13;

// function isAdult(age) {
//   const passed = age >= 18;

//   return passed;
// }

// 14;

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Пиши код ниже этой строки
//   const isMatch = SAVED_PASSWORD === password;

//   // Пиши код выше этой строки
//   return isMatch;
// }

15;

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Дополни эту строку
//     message = 'Вы совершеннолетний человек';
//   } else {
//     message = 'Вы не совершеннолетний человек';
//   }

//   return message;
// }

16;

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (ordered > available) {
//     message = 'На складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// 17;

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Пиши код ниже этой строки
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

18;

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Недостаточно средств на счету!';
//   } else {
//     message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${
//       customerCredits - totalPrice
//     } кредитов`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// 19;

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Дополни эту строку
//     message = 'Отменено пользователем!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

20;

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (ordered === 0) {
//     message = 'В заказе еще нет товаров';
//   } else if (ordered > available) {
//     message = 'Слишком большой заказ, на складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
//   // Пиши код выше этой строки
//   return message;
// }

21;

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // дополни эту строку

//   return isInRange;
// }

22;

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = 'pro' === subType || 'vip' === subType; // дополни эту строку

//   return canAccessContent;
// }

23;

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Дополни эту строку

//   return isNotInRange;
// }

24;

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Пиши код выше этой строки
//   return discount;
// }

25;
