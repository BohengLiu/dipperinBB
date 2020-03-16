import Koa from 'koa'
import path from 'path'
import User from '../models/user'

import {saveFileFromBuffer} from '../utils'
import {PUBLIC_PATH} from '../utils/constant'

export default class ApiController {
  // 用户注册
  public static async testApi ( ctx: Koa.Context) {
    ctx.body = "test api!"
  }
  
  public static async noApi ( ctx: Koa.BaseContext ) {
    ctx.body = "The api does not exist."
  }

  public static async addUser (ctx: Koa.BaseContext ) {
    const user = new User({
      uid:1,
      username:'liu',
      password:'liu',
      address: '0x1',
      balance: 0,
      permission: 2
    })
    await user.save()
    ctx.body = 'success!'
  }

  public static async getUser (ctx: Koa.BaseContext ) {
    
    const data = await User.findOne({username:'liu'})
    ctx.body = JSON.stringify(data)
  }

  public static async uploadimg (ctx: Koa.BaseContext) {
    // 必须用koa-body中间件解析
    const base_64_url = ctx.request.body.filedata;
    // console.log(base_64_url)
    const fileRouter = path.join('/files', `img${new Date().valueOf()}.png`)
    const savePath = path.join(PUBLIC_PATH, fileRouter)
    var base64 = base_64_url.replace(/^data:image\/\w+;base64,/, "")
    var dataBuffer = Buffer.from(base64, 'base64')
    // console.log('dataBuffer是否是Buffer对象：'+Buffer.isBuffer(dataBuffer));

    try {
      await saveFileFromBuffer(savePath,dataBuffer)
      console.log('save to',savePath)
      ctx.body = fileRouter
    } catch (e) {
      console.log('upload err',e)
    }
    // 用try封装
    // await saveFileFromBuffer(savePath, dataBuffer)
    // ctx.body = fileRouter
  }
}
