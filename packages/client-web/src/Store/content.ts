import { observable } from 'mobx'
import Essay, { essayParam } from 'Model/essay'
import * as api from 'Service/API/v1'
import { ResultIF } from 'Utils/common.interface'
import {ArticleData} from '@wisdom-node/server-nestjs/src/article/article.interface'


class ContentStore {
  @observable
  essayList: Essay[] = []

  addEssay = (param: essayParam) => {
    this.essayList.push(new Essay(param))
  }



  addMockEssay = () => {
    const param = {
      author: '付远康',
      essayTitle: '主题主题',
      createTime: new Date().valueOf(),
      earn: 564.26,
      like: 564,
      reply: 69,
      visit: 3658,
    }
    this.essayList.push(new Essay(param))
  }

  getArticle = async (slug: string): Promise<ResultIF<ArticleData,string>> => {
    console.log('get Article')
    const res = await api.getArticle(slug)
    if (res.success) {
      return res
    } else {
      return {
        success: false,
        error: "获取内容失败"
      }
    }
  }
}

export default ContentStore
