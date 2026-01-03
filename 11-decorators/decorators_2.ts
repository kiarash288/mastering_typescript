function logger (constructor: Function) {
    console.log('Logging...');
    console.log(constructor);
}

@logger
class Person {
    name = 'Max';
}


function log (target: any, propertyName: string | Symbol) {
    console.log('Property name:', propertyName);
    console.log('Target:', target);
}

class Product {
    @log
    title: string;
}