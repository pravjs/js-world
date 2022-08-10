const multiply = (a, b) => {
    return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(5));


const multiply3 = (a) => {
    return function(b) {
        return a * b
    }
}

const multiplyByThree = multiply3(3);

console.log(multiplyByThree(5));

const sum = a => b => b ? sum(a + b) : a;

console.log(sum(1)(2)(3)(4)());

