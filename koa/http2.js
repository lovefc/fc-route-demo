/*
 * @Author       : lovefc
 * @Date         : 2022-03-02 09:33:17
 * @LastEditTime : 2022-03-02 12:32:09
 */

const fs = require('fs');
// 引入https 以及 koa-ssl
const http2 = require('http2')
const sslify = require('koa-sslify').default

const path = require('path');
let dir = path.resolve(__dirname, '..');

const Koa = require('koa');
const app = new Koa();
app.use(sslify())  // 使用ssl
const options = {
    key: fs.readFileSync(dir + '/ssl/server.key'),
    cert: fs.readFileSync(dir + '/ssl/server.crt'),
}
let server = http2.createSecureServer(options, app.callback())
const _router = require('fc-route');
let router = new _router();
router.get('/', function (ctx, next) {
    ctx.body = 'hello world';
});
router.koa(app);
server.listen(3006, function () {
    console.log('服务器3006启动成功，可以访问了。。。')
});



