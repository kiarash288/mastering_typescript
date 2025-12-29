function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage)
}

function performJob(cb: (msg: string) => void) {
  cb('Job done!');
}
typr User = {
  name: string;
  age: number;
  greet: () => string;
}

let user: User = {
  name: 'Max',
  age: 39,
  greet() {
    console.log('Hello there!');
    return this.name;
  }
}

user.greet();