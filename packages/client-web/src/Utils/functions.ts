// #region  ======================== base ==========================
export const noop = () => null

/**
 * Calculate character length
 * @param str Character string
 * @returns character length
 */
export const calcChartLength = (str: string) => {
  if (!str) {
    return 0
  }
  // Have replaced the Chinese into English, and then calculate the length
  const _str = str.replace(/[\u0391-\uFFE5]/g, 'aa')
  return _str.length
}


/**
 * generate Avatar by address
 * @example
 * ```tsx
 *  <img src={genAvatar('0x000085E15e074806F1d123a2Bd925D2c60D627Fd8b2e',36)} alt="" />
 * ```
 * @param address
 * @param size
 */


export const getUUID = () => {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((parseInt(s[19], 16) & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return uuid
}

export const formatPercentage = (value: string | number) =>
  Number(value).toLocaleString('en', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const formatPrice = (amount: number | string) =>
  Number(amount).toLocaleString('zh', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const sleep = (length: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, length)
  })

export const floorHundredNumber = (num: number) => Math.floor(num / 100) * 100

export const throttle = <T extends (...args: any) => any>(func: T, wait: number) => {
  let ts = Date.now()
  return (...newArgs: any) => {
    const newTs = Date.now()
    if (newTs > ts + wait) {
      ts = newTs
      return func(newArgs)
    }
  }
}
