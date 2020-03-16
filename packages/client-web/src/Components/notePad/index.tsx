import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import axios from 'axios'
import MdEditor from 'react-markdown-editor-lite'
import {createMdParse} from 'Utils/htmlRender'
import 'react-markdown-editor-lite/lib/index.css';
import './index.less'

const mock_content = 'Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.'
interface Props {
  onClose: () => void
}

@observer
class NotePad extends React.Component<Props> {
  @observable
  content = ''
  
  url = '/upload'

  mdjs = createMdParse()

  mdEditor: any = null
  handleEditorChange({ text, html }: { text: string; html: string }): undefined {
    console.log('handleEditorChange', html, text)
    return
  }

  handleImageUpload = (file: Blob, callback: (data: any) => void) => {
    const reader = new FileReader()
    reader.onload = () => {
      const convertBase64UrlToBlob = (urlData: string) => {
        let arr = urlData.split(',')
        let mime = arr![0]!.match(/:(.*?);/)![1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {
          type: mime,
        })
      }
      const genFormData = (file: string) => {
        let formData = new FormData()
        formData.append('filedata', file)
        return formData
      }
      const blob = convertBase64UrlToBlob(reader.result as string)
      console.log(genFormData(reader.result as string).get('filedata'))
      console.log(blob)
      console.log(reader.result)
      axios
        .post(this.url, genFormData(reader.result as string))
        .then(res => {
          console.log('res=>', res)
          callback(res.data)
        })
        .catch(e => callback(''))
    }
    reader.readAsDataURL(file)
  }

  handleNotePadClick = () => {
    this.props.onClose()
  }
  handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  handleGetMdValue = () => {
    this.mdEditor && alert(this.mdEditor.getMdValue())
  }
  handleGetHtmlValue = () => {
    // this.mdEditor && alert(this.mdEditor.getHtmlValue())
    if (this.mdEditor) {
      this.content = this.mdEditor!.getHtmlValue()
    }
  }
  render() {
    return (
      <div className="notePad" onClick={this.handleNotePadClick}>
        <div className="modal" onClick={this.handleModalClick}>
          <div className="header-bar">
            <span className="close" onClick={this.handleNotePadClick}>
              ×
            </span>
          </div>
          <div className="input-title">
            <input type="text" placeholder={'请输入文章标题(最多50个字)'} />
          </div>
          <section style={{ height: 500, width: 1400 }}>
            <MdEditor
              ref={node => (this.mdEditor = node)}
              value={mock_content}
              style={{ height: '500px' }}
              config={{
                view: {
                  menu: true,
                  md: true,
                  html: true,
                },
                // imageUrl: 'https://octodex.github.com/images/minion.png'
              }}
              renderHTML={(text)=>this.mdjs.render(text)}
              onChange={this.handleEditorChange}
              onImageUpload={this.handleImageUpload}
            />
          </section>
          <div className="button-group">
            <button className="publish">发布</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NotePad
