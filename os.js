
// Inbuilt or core modules in node.js

const os = require("os");

console.log("Free memory in GB : ",((os.freemem())/1024/1024/1024).toFixed(2));

console.log("Total memory in GB : ",((os.totalmem())/1024/1024/1024).toFixed(2));

console.log("Version : ", os.version());

console.log("CPU :", os.cpus());

