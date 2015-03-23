var express = require('express');
var path = require('path');
var wechat = require('wechat-enterprise');
var API = require('wechat-enterprise').API;

var config = {
    token: 'hackthon',
    corpsecret: 'Yc4PJr25b3BYSE6kWNUYgYBW7l-ICBcNs9weUSdZPz6d-UMmRLo6cYFZRVpRXWl1',
    encodingAESKey: 'FpqVmn7klmiHYGgF6NrAxOPcHX13kHKumrfVuep1L6y',
    corpId: 'wx3412f502e6a35c42'
};

var access_token = 'ZjeBxE9nFuAjGhTRoco1knrJlkmGHy40Doidm2taHChssPQUZ8fBtIr7sdQjBvr1';
var to = {
    "touser" : "@all"
};

var message = {
    "touser" : "@all",
    "msgtype": "text",
    "agentid": "10",
    "text": {
        "content": "Holiday Request For Pony(http://xxxxx)"
    },
    "safe":"0"
};


var app = express();
app.use(express.query());
var api =  new API(config.corpId, config.corpsecret,'0');
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// catch 404 and forward to error handler
api.send(to, message, function (err, result) {
    console.log(err + result);
});
module.exports = app;
