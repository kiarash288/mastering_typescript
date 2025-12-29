let hobies = ['Sports', 'Cooking'];
// hobies.push(10);  => ارور میگیرد

let userss: Array<string | number>;

users = [1, 'Max'];
users = [5, 1];
users = ['Max', 'Anna'];

// Tuple => یک آرایه با طول و اندازه مشخص و موقعیت خاص دارد

let possibleResultss: [number, number];

possibleResultss = [1,-1];


let objectss : {
    name: string;
    id: number;
    hobbiess: string[];
    role: {
        description: string;
        number: number;
    }
} = {
    name: 'Max',
    id: 1,
    hobbiess: ['Sports', 'Cooking'],
}

let vall : {} = 'os a value' // any type except null and undefined 
let test: {}; 
test = 10;          // اوکیه!
test = "سلام";      // اوکیه!
test = true;        // اوکیه!
// test = null;     // خطا! (چون پوچ است)


let dataa: Record<string, number | string>;
dataa = {
    entry1: 1,
    entry2: 'some string'
}