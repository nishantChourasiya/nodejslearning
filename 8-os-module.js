const os = require('os');

//userInfo
const user = os.userInfo();
console.log(user);

//system uptime
const uptime = os.uptime();
console.log("uptime: ", uptime);

//os info
const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(osInfo);