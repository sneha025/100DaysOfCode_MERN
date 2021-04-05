const name = require("./module1");
console.log(name);
function namePrinter(name) {
  setInterval(() => {
    name.forEach((element) => {
      console.log("names are: " + element);
    });
  }, 1000);
}
namePrinter(name);
