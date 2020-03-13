import fs from 'fs'

export const saveFileFromBuffer = (savePath, dataBuffer) => {
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