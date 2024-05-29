function print(num) {
    console.log(`resultado = ${num}`);
}

function soma(a, b, callback) {
    const op = a + b;
    callback(op);
}

function mult(a, b, cb) {
    const op = a * b;
    cb(op);
}

soma(2, 2, print);
mult(2, 10, print);