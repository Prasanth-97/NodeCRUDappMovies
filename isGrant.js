const sampleData = [
  {
    name: "xyz",
    isgrant: "true",
  },
  {
    name: "abc",
    isgrant: "true",
  },
  {
    name: "sds",
    isgrant: "false",
  },
];

const output = sampleData.filter((data) => data.isgrant == "true");
// console.log(output);

const quote = " Be happy".split(" ");
let arr = 0;
for (let i = 0; i < quote.length; i++) {
  if (quote[i]) {
    arr = arr + 1;    //empty string is false or udefined
  }
}
console.log(arr);
// const quote1 = quote.trimStart();
// console.log(quote1);
// const stringLen = quote.length;
// console.log(stringLen);
// const array = quote1.split(" ");
// console.log(array.length);
// console.log("array",array);
