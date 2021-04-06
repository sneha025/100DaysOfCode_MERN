const os = require("os");

console.log(os.userInfo());

const CurrentState = {
  name: os.type(),
  TotalMemory: os.totalmem(),
};

console.log(CurrentState);
