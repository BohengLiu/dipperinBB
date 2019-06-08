import Koa from 'koa'
import router from './routes'

import { connectMongoDB } from './db'

const app = new Koa()

connectMongoDB('mongodb://localhost:27017/db1')

app.use(router.routes())
app.use(router.allowedMethods())

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(8091, () => {
  console.log('Now koa is listening 8091!')
})
