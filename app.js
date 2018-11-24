const Koa = require('koa');
const route = require('koa-route');
const koaBody = require('koa-body');
const app = new Koa();


const handler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.type = 'json';
    ctx.response.body = {code:500};
    ctx.app.emit('error', err, ctx);
  }
};

// app.on('error', function(err) {
//   console.log('logging error ', err.message);
//   console.log(err);
// });


const index = ctx => {
    ctx.response.type = 'json';
    const n = Number(ctx.cookies.get('view') || 0) + 1;
	  ctx.cookies.set('view', n);
    ctx.response.body = { data: 'Hello World' };
};

app.use(handler);
app.use(koaBody());
app.use(route.get('/', index));
// app.listen(3000);

module.exports = app;



