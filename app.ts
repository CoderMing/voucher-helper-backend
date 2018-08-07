import * as Koa from 'koa'
import * as logger from 'koa-logger'
import router from './routes/index'

const app = new Koa()

app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

app.use(router.routes())

app.use(ctx => {
  ctx.status = 404
  ctx.body = {
    msg: 'not found'
  }
})

app.listen(3000)