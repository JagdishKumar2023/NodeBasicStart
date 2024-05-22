const fs = require("fs");

console.log("1");

fs.readFile("contact.txt", "utf-8", (err, result) => {
  console.log(result);
});

console.log("Next");
console.log("2");
console.log("3");
