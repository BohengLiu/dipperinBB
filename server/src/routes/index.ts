import Router from 'koa-router'
import { BaseContext } from 'koa'
import koaBody from 'koa-body'
import send from 'koa-send'
import path from 'path'

import apiRouter from './api'
import staticRouter from './static'
import * as controller from '../controllers'

import {PUBLIC_PATH} from '../utils/constant'

const router = new Router()

router.use(apiRouter.routes(), apiRouter.allowedMethods())
router.use(staticRouter.routes(), staticRouter.allowedMethods())

// *******************************  debug ******************************************
router.post(
  '/upload',
  koaBody({
    jsonLimit: '2mb',
    multipart: true
  }),
  controller.api.uploadimg
)

router.get('/*', async (ctx) => {
  // ctx.body = await asyncReadFile()
  
  // ctx.set('Content-Type','text/html; charset=utf-8')
  await send(ctx,path.join('public','index.html'))
})

// **********************************************************************************

export default router
