/*
 * @Author       : lovefc
 * @Date         : 2022-02-14 16:25:16
 * @LastEditTime : 2022-03-02 09:20:40
 */
const http = require('http');
let server = http.createServer();
const _router = require('fc-route');
let router = new _router();
router.get('/',function (req, res) {
	res.end('hello world');
});

router.http(server);
server.listen(3000, function () {
	console.log('服务器3000启动成功，可以访问了。。。')
})