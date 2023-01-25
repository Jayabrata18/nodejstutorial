const { log } = require("console");
const os = require("os");
const user = os.userInfo();
console.log(user); //info about current user
//method returns system uptime in sec
console.log(`uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  // totalMem: os.totalMem(),
  freeMem: os.freeMem(),
};
console.log(currentOS);
