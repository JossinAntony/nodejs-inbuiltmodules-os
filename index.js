const myOS = require('os');

var userInfo = myOS.userInfo();
var platform = myOS.platform();
var homedir = myOS.homedir();
var hostname  = myOS.hostname();

var networkInterfaces = myOS.networkInterfaces();
var osVersion = myOS.version()
var uptime = myOS.uptime()
var tmpdir = myOS.tmpdir();

console.log(userInfo);
console.log(platform);
console.log(homedir);
console.log(hostname);

console.log(networkInterfaces);
console.log(osVersion);
console.log(uptime);
console.log(tmpdir);
