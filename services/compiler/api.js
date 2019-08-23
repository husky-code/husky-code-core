// Call to JDoodle API, licensed by Nutpan.com
var request = require('request');
var wrapper = require('./wrapper');

// Test code
var code = "public void printMessage(String str) { System.out.println(str); }"

var client = {
    script: wrapper.wrapScript("System.out.println(\"Hello World\");", "java"), // Test code
    stdin: "Hello World!",
    language: "java",
    versionIndex: "0",
    clientId: "clientId",
    clientSecret: "clientSecret"
};
request({
    url: 'https://api.jdoodle.com/execute',
    method: "POST",
    json: client
},
function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
});