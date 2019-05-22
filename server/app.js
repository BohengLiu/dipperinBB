
const Koa = require('koa')
var static = require('koa-static');
var cors = require('koa-cors');
//允许跨域访问

const Router = require('koa-router')
const fs = require('fs')
const app = new Koa()
const router = Router()
// const static = require('koa-static-router');
const koaBody = require('koa-body')
const path = require('path')

const saveFileFromBuffer = (savePath,dataBuffer)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile(savePath,dataBuffer,function(err){//用fs写入文件
      if(err){
          reject(err)
      }else{
          resolve(true)
      }
    });
  })
}

// 前端使用formData方式组装数据
router.post('/upload', koaBody({ jsonLimit: '2mb', multipart: true }), async (ctx) => {
    const base_64_url = ctx.request.body.filedata;
    // console.log(base_64_url)
    const fileRouter = path.join('/files', `img${new Date().valueOf()}.png`)
    const savePath = path.join(__dirname,`public`, fileRouter)
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
    await saveFileFromBuffer(savePath,dataBuffer)
    ctx.body = fileRouter

})

app.use(cors());
app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.use(static(__dirname+'/public'))





app.listen(9000,function(){
  console.log('Server listening on:',9000);
})