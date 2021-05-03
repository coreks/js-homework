import menu from './db.menu.js';
import oficiants from './db.oficiants.js';
import tables from './db.tables.js';

// console.log(menu);
// console.log(oficiants);
// console.log(tables);

// 1. Написать функцию, которая из списка официантов(массив объектов) выбрает официантов,
// которые  есть на смене по свойству isPresent: true; и записывает их всех в массив, который
// хранится в переменной presentWorkers = [].
// Пример:
// concole.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [], tips: 0}, {name: "Bob", isPresent: true, tables: [], tips: 0}]
//

function getPresentWorkers() {
  const presentWorkers = [];

  for (const worker of oficiants) {
    if (worker.isPresent === true) {
      presentWorkers.push({ ...worker });
    }
  }
  return presentWorkers;
}

const presentWorkers = getPresentWorkers();

// console.log(getPresentWorkers());

// 2. Написать ф-цию, которая принимает два параметра (список столиков, список официантов на смене) распределяет все столики в кафе - tables,
// между всеми официантами, которые есть на смене и перезаписывает в свойство каждому столику, имя оффицианта, который его обслуживает,
// и оффицианту, в свою очередь, в сойство tabeles, перезаписывает все номера столиков, которые он обслуживает
// на этой смене - функция ничего не возвращает, а перезаписывает объекты в массивах
// Пример:
// console.log(presentWorkers); // [{name: "Ann", isPresent: true, tables: [1, 3, 6, 7], tips: 0}, {name: "Bob", isPresent: true, tables: [2, 4, 5, 8], tips: 0}]
// console.log(tables); // [{tabel: 1, service: "Ann"}, {tabel: 2, service: "Bob"}, {tabel: 3, service: "Ann"}, ... ]

function checkTables(tables, presentWorkers) {
  for (let i = 0; i < tables.length; i += 1) {
    const indexWorker = i % presentWorkers.length;
    tables[i].service = presentWorkers[indexWorker].name;

    // presentWorkers[indexWorker].tables.push(tables[i.table]);
    presentWorkers[indexWorker].tables = [
      ...presentWorkers[indexWorker].tables,
      tables[i].table,
    ];
  }
}

checkTables(tables, presentWorkers);
// console.log(tables);
// console.log(presentWorkers);

// 3. Написать функцию getOrder()(table, dishId, num), которая принимает номер столика, id блюда(меню с блюдами внешняя переменная из глобальной области видимости) и кол-во данных блюд в заказе. добавляет в объекте столика, свойство currentOrder - объект со свойствами, где ключ - id блюда, значение ключа - кол-во этих блюд в текущем заказе, Пример currentOrder: {capuchino: 2, napoleon: 2, zavarnoe: 1},

function getOrder(tableNum, dishId, quantity) {
  for (const key of tables) {
    key.table;
    if (key.table === tableNum) {
      if (!key.currentOrder) {
        key.currentOrder = {};
      }
      if (!key.currentOrder[dishId]) {
        key.currentOrder[dishId] = 0;
      }
      //   key.currentOrder[dishId] = quantity;
      //   console.log(key.currentOrder[dishId]);
      key.currentOrder[dishId] = key.currentOrder[dishId] + quantity;
    }
  }
}
console.log(getOrder(1, 'napoleon', 3));

getOrder(1, 'capuchino', 4);
getOrder(1, 'capuchino', 2);
console.log(tables);
