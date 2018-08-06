import * as Koa from 'koa'
import * as logger from 'koa-logger'
import router from './routes/index'

const app = new Koa()


app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

app.use(router.routes())

// app.use(ctx => {
//   ctx.status = 200
//   ctx.body = {
//     msg: 'hello world!'
//   }
// })

app.listen(3000)