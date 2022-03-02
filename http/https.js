/*
 * @Author       : lovefc
 * @Date         : 2022-02-21 09:37:03
 * @LastEditTime : 2022-03-02 09:27:10
 */
const https = require('https');
const fs = require('fs');
const path = require('path');
let dir = path.resolve(__dirname, '..');
const server = https.Server({
    key: fs.readFileSync(dir+'/ssl/server.key'),
    cert: fs.readFileSync(dir+'/ssl/server.crt'),
});
const _router = require('fc-route');
let router = new _router();
router.get('/',function (req, res) {
	res.end('hello world');
});

router.http(server);
server.listen(3001, function () {
	console.log('服务器3001启动成功，可以访问了。。。')
})