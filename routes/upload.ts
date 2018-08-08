import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

import { RouterFormat } from './index'

router.get('/', async ctx => {
  ctx.status = 200
  ctx.body = '12313'
})

router.post('/image', async (ctx, next) => {
  console.log(ctx.request.body)
})

const routes: RouterFormat = {
  path: '/upload',
  router
}

export default routes