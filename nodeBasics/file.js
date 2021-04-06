//synchronus file reading writing
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("../Content/first.txt", "utf-8");
const second = readFileSync("../Content/second.txt");

console.log(first, second);

writeFileSync(
  "../Content/result-sync.txt",
  `Here is the result ${first},${second}`
);

// //Async

// const { readFile, writeFile } = require("fs");
// readFile("../Content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });

