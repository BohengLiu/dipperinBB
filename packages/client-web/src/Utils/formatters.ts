/**
 * 保留两位字符
 * @param num 
 */
export const padZero = (num: number) => String(num).padStart(2, '0')

export const formatTime = (rts: number | string) => {
  const ts = new Date(rts)
  return `${ts.getFullYear()}-
      ${padZero(ts.getMonth() + 1)}-
      ${padZero(ts.getDate())} ${padZero(ts.getHours())}:${padZero(ts.getMinutes())}:${padZero(ts.getSeconds())}`
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
}
