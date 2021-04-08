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

const { readFile, writeFile } = require("fs");

function readFromFile(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeintoFile(path, data) {
  return new Promise((resolve, reject) => {
    writeFile(path, `${data}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

const work = async () => {
  const data = await readFromFile("../Content/first.txt");
  console.log(data);
  writeintoFile("../Content/async-result-await.txt", data);
  return data;
};
work();
exports.work = work;
