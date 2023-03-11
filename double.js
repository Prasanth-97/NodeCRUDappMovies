console.log("Hello world");

const dbl = (n) => n * 2 ;

console.log(dbl(2));

// no dom and window is available in node.js
//console.log(window); ❌
//console.log(document); ❌

console.log(global); //✅ global is available in place of window and document

// Global variable(process)

console.log(process.argv) // argv - argument values for refer see in console

console.log(dbl(process.argv[2]));