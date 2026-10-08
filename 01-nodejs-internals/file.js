const fs = require("fs");

//Blocking....
const result = fs.readFileSync('../Test.txt', 'utf8');
console.log(result);


// Non Blocking...
fs.readFile("../Test.txt", "utf-8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

console.log("2");
