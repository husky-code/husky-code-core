// Call to JDoodle API, licensed by Nutpan.com
var request = require('request');
//var router = express.Router();
var wrapper = require('./wrapper');

var code = "public void printMessage(String str) { System.out.println(str); }"

var client = {
    script: wrapper.wrapScript("System.out.println(\"Hello World\");", "java"),
    stdin: "Hello World!",
    language: "java",
    versionIndex: "0",
    clientId: "9fcc3369967570f5ccaad56fed685c7e",
    clientSecret: "cc637c78b94329ac1027258e6aceff7bf4f71f031c3821012f1b971c4201f975"
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