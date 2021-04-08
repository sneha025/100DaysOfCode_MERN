// const names = ["sneha", "kira", "priya"];
// module.exports = names;
// console.log(module.exports)

const res = require("./AsyncFileSyst");

const data = () => {
  return new Promise((resolve, reject) => {
    const result = res.work();
    if (!result) {
      reject("not getting result");
    } else {
      resolve(result);
    }
  });
};

// const val=data();

const http = require("http");

const server = http.createServer(async (req, res) => {
  const val = await data();
  res.end(val);
});

server.listen("5000");
