/**
 * 验证不能包含字母
 * @param { string } value
 */
export const isNoWord = (value: string) => /^[^A-Za-z]*$/g.test(value)

/**
 * 验证中文和数字
 * @param { string } value
 */
export const isCHNAndEN = (value: string) =>
  /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(
    value
  )

/**
 * 验证邮政编码(中国)
 * @param { string } value
 */
export const isPostcode = (value: string) =>
  /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g.test(value)

/**
 * 验证微信号，6至20位，以字母开头，字母，数字，减号，下划线
 * @param { string } value
 */
export const isWeChatNum = (value: string) => /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value)

/**
 * 验证16进制颜色
 * @param { string } value
 */
export const isColor16 = (value: string) => /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);

/**
 * 验证火车车次
 * @param { string } value
 */
export const isTrainNum = (value: string) => /^[GCDZTSPKXLY1-9]\d{1,4}$/g.test(value);

/**
 * 验证网址(支持端口和"?+参数"和"#+参数)
 *  @param { string } value
 */
export const isRightWebsite = (value: string) => /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g.test(value);

/**
 * 验证必须带端口号的网址(或ip)
 * @param { string } value
 */
export const isHttpAndPort = (value: string) => /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g.test(value);

/**
 * 验证迅雷链接
 *  @param { string } value
 */
export const isThunderLink = (value: string) => /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);

/**
 * 验证ed2k链接(宽松匹配)
 *  @param { string } value
 */
export const ised2k = (value: string) => /^ed2k:\/\/\|file\|.+\|\/$/g.test(value);

/**
 * 验证磁力链接(宽松匹配)
 *  @param { string } value
 */
export const isMagnet = (value: string) => /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);


/**
 * 验证email(邮箱)
 * @param { string } value
 */
export const isEmail = (value: string) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);


/**
 * 验证中文/汉字
 * @param { string } value
 */
export const isChineseCharacter = (value: string) => /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value);
