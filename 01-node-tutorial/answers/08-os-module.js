const os = require('node:os');

const user = os.userInfo();
console.log(user);

const cpu = os.cpus();
console.log(cpu);

const constants = os.constants.signals;
console.log(constants);

const errorConstants = os.constants.errno;
console.log(errorConstants)
