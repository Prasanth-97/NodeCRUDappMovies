
// Formula => c * (9/5) + 32

const farenhit = (celcius) => { return (celcius * (9/5) + 32).toFixed(2)} ;

console.log(`${farenhit(process.argv[2])} farenhit 🌡️ `);