// const { readFile, writeFile } = require("fs");

/**
 * Here callback hell created
 */
// readFile("../Content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   const first = result;
//   readFile("../Content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(result);
//     const second = result;

//     writeFile(
//       "../Content/async-result.txt",
//       `here:${first},${second}`,
//       "utf8",
//       (err, result) => {
//         if (err) {
//           console.log(err);
//           return;
//         }
//       }
//     );
//   });
// });

/**
 * Escape from Evil callback hell
 */

const { readFile, writeFile } = require("fs").promises;

// async function readFromFile() {
//   const result = await readFile("../Content/first.txt", "utf8");
//   console.log(result);
//   return result;
// }

// async function writeFileFrom(text) {
//   const result = await writeFile(
//     "../Content/async-result-await.txt",
//     `${text}`
//   );
//   return result;
// }
// writeFileFrom(readFromFile());
