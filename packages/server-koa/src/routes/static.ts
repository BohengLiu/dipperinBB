import Router from 'koa-router'
import Static from 'koa-static'
import { BaseContext } from 'koa'
import { PUBLIC_PATH } from '../utils/constant'

const staticRouter = new Router()

staticRouter.get('/test', async (ctx: BaseContext) => {
  ctx.body = "test static!"
})

staticRouter.get('/*', Static(PUBLIC_PATH))

export default staticRouter
