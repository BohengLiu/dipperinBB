const Koa = require('koa')
const static = require('koa-static');
const cors = require('koa-cors');
//允许跨域访问

const Router = require('koa-router')
const send = require('koa-send')
const fs = require('fs')
const app = new Koa()
const router = Router()
// const static = require('koa-static-router');
const koaBody = require('koa-body')
const path = require('path')

const saveFileFromBuffer = (savePath, dataBuffer) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(savePath, dataBuffer, function (err) { //用fs写入文件
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    });
  })
}

// 前端使用formData方式组装数据
router.post('/upload', koaBody({
  jsonLimit: '2mb',
  multipart: true
}), async (ctx) => {
  const base_64_url = ctx.request.body.filedata;
  // console.log(base_64_url)
  const fileRouter = path.join('/files', `img${new Date().valueOf()}.png`)
  const savePath = path.join(__dirname, `public`, fileRouter)
  var base64 = base_64_url.replace(/^data:image\/\w+;base64,/, "")
  var dataBuffer = Buffer.from(base64, 'base64')
  // console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));

  // try {
  //   await saveFileFromBuffer(savePath,dataBuffer)
  //   console.log('save to',savePath)
  //   ctx.body = savePath
  // } catch (e) {
  //   console.log('upload err',e)
  // }
  // TODO: 将try封装
  await saveFileFromBuffer(savePath, dataBuffer)
  ctx.body = fileRouter
})

router.get('/*', static(__dirname + '/public'))


function readFile(dir) {
  return new Promise((resolve, reject) => {
    fs.readFile(dir, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const asyncReadFile = async () => {
  try {
    return await readFile('./public/index.html')
  } catch (e) {
    return ''
  }
}

router.get('/*', async (ctx) => {
  // ctx.body = await asyncReadFile()
  
  // ctx.set('Content-Type','text/html; charset=utf-8')
  await send(ctx,'./public/index.html')
})

app.use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

// app.use(static(__dirname+'/public'))





app.listen(8090, function () {
  console.log('Server listening on:', 9000);
})