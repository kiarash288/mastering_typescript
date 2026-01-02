// spread operator  در واقع کپی میکنه و باعث میشه که خود متغیر اصلی تغیر نکنه 

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  name: 'Max',
  age: 30,
}


const copiedPerson = {...person};


// Array Destructuring 

const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;

// object destructring 

const {firstName: userName, age} = person;


const printOutput: (a:number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}


