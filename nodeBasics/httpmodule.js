const http = require("http");
const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("here you go");
  }
});

server.listen(port);
