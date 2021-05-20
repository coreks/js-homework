// #1.
// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator();
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.

// class Calculator {
//   //   constructor() {
//   //     this.a = 27;
//   //     this.b = 'fff';
//   //   }
//   calculate(str) {
//     const [a, operator, b] = str.split(' ');
//     switch (operator) {
//       case '+':
//         return Number(a) + Number(b);

//       case '-':
//         return Number(a) - Number(b);

//       default:
//         if (!this.instructions) {
//           return;
//         }
//         const usageFunc = this.instructions[operator];
//         return usageFunc(Number(a), Number(b));
//     }
//   }

//   addMethod(name, func) {
//     if (!this.instructions) {
//       this.instructions = {};
//     }
//     this.instructions[name] = func;
//   }
// }

// const calc = new Calculator();
// // console.log(calc.calculate('1 + 2'));
// // console.log(calc.calculate('10 - 2'));

// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// console.log(powerCalc);

// console.log(powerCalc.calculate('10 * 2'));
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);
// console.log(powerCalc);
// console.log(powerCalc.calculate('3 / 2'));
// console.log(powerCalc.calculate('2 ** 10'));

2;

// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31
// ====
// Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getRate); //выведет 10
// console.log(worker.getDays); //выведет 31
// console.log(worker.getSalary); //выведет 310 - то есть 10*31
// ====
// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры. Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// class Worker {
//   #name;
//   #surname;
//   #rate;
//   #days;
//   constructor({ name, surname, rate, days }) {
//     this.#name = name;
//     this.#surname = surname;
//     this.#rate = rate;
//     this.#days = days;
//   }
//   get getSalary() {
//     return this.#rate * this.#days;
//   }

//   get getName() {
//     return this.#name;
//   }

//   get getSurname() {
//     return this.#surname;
//   }

//   get getRate() {
//     return this.#rate;
//   }

//   get getDays() {
//     return this.#days;
//   }

//   set setRate(newRate) {
//     this.#rate = newRate;
//   }

//   set setDays(newDays) {
//     this.#days = newDays;
//   }
// }

// var worker = new Worker({
//   name: 'Иван',
//   surname: 'Иванов',
//   rate: 10,
//   days: 31,
// });
// console.log(worker.getName);
// console.log(worker.getSurname);
// console.log(worker.getRate);
// console.log(worker.getDays);
// console.log(worker.getSalary);
// worker.setRate = 20;
// worker.setDays = 10;
// console.log(worker.getSalary);

3;

// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:
// var validator = new Validator();
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

// class Validator {
//   isEmail(email) {
//     if (!email.includes('@')) return false;
//     const emailSplit = email.split('@');
//     if (emailSplit.length > 2) return false;
//     const [userName, domain] = emailSplit;
//     console.log(emailSplit);
//     if (userName === '' || domain === '') return false;
//     if (!domain.includes('.')) return false;
//   }

//   isEmailReg(email) {
//     const regExp = /\b[\w]+@[a-z0-9]+\.[a-z]+\b/;
//     return regExp.test(email);
//   }
// }
// var validator = new Validator();
// console.log(validator.isEmailReg('11@gmail.com'));
// console.log(validator.isEmailReg('phphtml@mail.ru.com.net'));
