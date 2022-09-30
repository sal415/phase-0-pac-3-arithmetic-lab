function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function multiply(a,b){
return a * b;
}

function divide(a, b){
return a / b;
}

function increment(n) {
    n = ++n;            
    return n
}

function decrement (n) {
    return n = --n          // how is n = --n different from n-- and why it matters
}

function makeInt(n) {
return parseInt(n, 10);
     // how did it become  a parsed integer
}

function preserveDecimal (n) {
return parseFloat(n)
}