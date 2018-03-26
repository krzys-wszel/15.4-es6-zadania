// TASK 1 
const string1 = 'Hello';
const string2 = 'world';
const addedStrings = `${string1} ${string2}`;

console.log('TASK 1');
console.log(addedStrings);

//TASK 2 
const number1 = 0,
    number2 = 0;
const multiply = (number1 = 1, number2 = 1) => number1 + number2;
console.log('TASK 2');
console.log(multiply(2));
console.log(multiply(6, 5));

//TASK 3 
console.log(' TASK 3');
const average = (...args) => {
    let sum1 = 0;
    args.forEach(arg => {
        sum1 += arg;
    });
    console.log(`Średnia liczb wynosi: ${sum1 / args.length}`);
};
average(1, 2, 4);

const average5 = (...args) => {

    const sum = args.reduce((suma, arg) => {
        return suma + arg;
    });

    return console.log(`Średnia podanych liczb wynosi: ${sum / args.length}`);
};

average5(1, 2, 3, 4);

//TASK 4 
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

average(...grades);

// TASK 5

const array1 = [1, 4, 'Alina', false, 'Zięba'];

const [, , firstName, , lastName] = array1;

console.log('TASK 4');
console.log(`The frist name is: ${firstName}`);
console.log(`The last name is: ${lastName}`);
