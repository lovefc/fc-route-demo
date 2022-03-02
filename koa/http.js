/*
 * @Author       : lovefc
 * @Date         : 2022-03-02 09:19:49
 * @LastEditTime : 2022-03-02 12:32:16
 */
const Koa = require('koa');
const app = new Koa();
const _router = require('fc-route');
let router = new _router();
router.get('/', function (ctx, next) {
	ctx.body = 'hello world';
});

router.koa(app);

app.listen(3004, function () {
	console.log('服务器3004启动成功，可以访问了。。。')
})