let names: Array<string> = ['Max', 'Anna'];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = 'Max';
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, 'Max');

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ userName: 'Max' }, { age: 35 });
console.log(merged);

class User<T> {
  constructor(public id: T) {}
}

const user = new User('i1');
user.id


function creat <T extends object , U extends any[]>(a: T, b:U) {
  return { ...a, ...b };
}

type dataStorage<T> = {
  [key: string]: T;
}

let data: dataStorage<string> = {
  name: 'Max',
}

let data2: dataStorage<number> = {
  age: 35,
}