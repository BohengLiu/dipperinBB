import Router from 'koa-router'

import * as controller from '../controllers'



const apiRouter = new Router({prefix: '/api'})

// apiRouter.get('/test', async (ctx: BaseContext) => {
//   ctx.body = "test api!"
// })

apiRouter
  .get('/test', controller.api.testApi)
  .get('/addUser',controller.api.addUser)
  .get('/getUser',controller.api.getUser)
  .all('*', controller.api.noApi)

export default apiRouter