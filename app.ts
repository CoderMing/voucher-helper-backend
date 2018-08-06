import * as fs from 'fs'
import * as path from 'path'
import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'
import * as logger from 'koa-logger'

const app = new Koa()
const router = new KoaRouter()

app.use(logger())
app.use(router.routes())

app.use(ctx => {
  ctx.status = 200
  ctx.body = {
    msg: 'hello world!'
  }
})

app.listen(3000)