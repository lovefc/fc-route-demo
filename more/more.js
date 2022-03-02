/*
 * @Author       : lovefc
 * @Date         : 2022-03-02 12:33:31
 * @LastEditTime : 2022-03-02 12:33:31
 */
const http = require('http');

let server = http.createServer();

const _router = require('fc-route');

let router = new _router();

router.get('/',function (req, res) {
	res.end('hello world');
});

/** 精确匹配测试 **/

// 试着访问:http://127.0.0.1/8/aaa
router.get('/%sz/@zm', function (req, res) {
	let { sz, zm } = req.params;
	res.end('数字:'+sz+'，字母:'+zm);
});

// 试着访问:http://127.0.0.1/6/aaa
router.get('/6/@zm', function (req, res) {
	let { zm } = req.params;
	res.end('字母:'+zm);
});

/** 中文匹配 **/

// 试着访问:http://127.0.0.1/我爱你
router.get('/!zw', function (req, res) {
	let { zw } = req.params;
	res.end('中文:'+zw);
});

router.http(server);

server.listen(3000, function () {
	console.log('服务器3000启动成功，可以访问了。。。')
})