// createfiles in node .js
const { log } = require("console");
const fs = require("fs");

// Sync...
fs.writeFileSync("./text.txt", "Hello world");

// Async...
fs.writeFile("./text.txt", "Hello world", (err) => {});

const result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

// File reading useing readFile method

fs.readFile("./contact.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(result);
  }
});

fs.appendFileSync("./text.txt", `${Date.now()} Hey there\n`);
