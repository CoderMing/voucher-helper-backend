import * as fs from 'fs'
import * as path from 'path'
import * as KoaRouter from 'koa-router'

const router = new KoaRouter()

// Router Module 输出的格式
export interface RouterFormat {
  // 监听的路由
  path: (string | RegExp)
  // Router主体
  router: KoaRouter
}

const routerList: RouterFormat[] = [];

const readRouter = async list => {
  const routerFiles = fs.readdirSync(__dirname)
  for (let i = 0, length = routerFiles.length; i < length; i++) {
    let el = routerFiles[i]
    if (el === 'index.ts')
      return void 0
    list.push(await import(path.resolve(__dirname, el)))
  }
  return Promise.resolve(list)
}

readRouter(routerList).then(res => res.forEach(obj => {
  router.use(obj.path, obj.router.routes(), obj.router.allowedMethods())
}))

export default router