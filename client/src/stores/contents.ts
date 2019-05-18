import { observable } from "mobx";
import Essay, { essayParam } from "@models/essay";

class ContentStore {
  @observable
  essayList: Essay[] = [];

  addEssay = (param: essayParam) => {
    this.essayList.push(new Essay(param));
  };

  addMockEssay = () => {
    const param = {
      author: '付远康',
      essayTitle: '主题主题',
      createTime: new Date().valueOf(),
      earn: 564.26,
      like: 564,
      reply: 69,
      visit: 3658
    };
    this.essayList.push(new Essay(param));
  };
}

export default ContentStore
