export interface essayParam {
  author: string;
  essayTitle: string;
  createTime: number;
  earn: number;
  like: number;
  reply: number;
  visit: number;
}

class Essay {
  private _author: string;
  private _essayTitle: string;
  private _createTime: number;
  private _earn: number;
  private _like: number;
  private _reply: number;
  private _visit: number;

  constructor(param: essayParam) {
    // TODO: 增加参数校验
    this._author = param.author;
    this._essayTitle = param.essayTitle;
    this._createTime = param.createTime;
    this._earn = param.earn;
    this._like = param.like;
    this._reply = param.reply;
    this._visit = param.visit;
  }

  get author() {
    return this._author;
  }

  get essayTitle() {
    return this._essayTitle;
  }

  get createTime() {
    const t = new Date(this._createTime);
    const year = t.getFullYear().toString();
    const month = toTwoChar(t.getMonth() + 1);
    const date = toTwoChar(t.getDate());
    const hours =
      t.getHours() < 13
        ? "上午" + toTwoChar(t.getHours())
        : "下午" + toTwoChar(t.getHours() - 12);
    const minutes = toTwoChar(t.getMinutes());
    return `${year}年${month}月${date}日 ${hours}:${minutes}`;
  }
  get earn() {
    return this._earn;
  }
  get like() {
    return this._like;
  }
  get reply() {
    return this._reply;
  }
  get visit() {
    return this._visit;
  }
}

function toTwoChar(num: number) {
  const str = num.toString();
  if (str.length === 1) {
    return "0" + str;
  }
  return str;
}

export default Essay;
