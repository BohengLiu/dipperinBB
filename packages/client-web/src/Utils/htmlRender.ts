import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'

// const mdjs = new MarkdownIt({
//   html: true,
//   linkify: true,
//   typographer: true,
//   // highlight: function (str, lang) {
//   //   if (lang && hljs.getLanguage(lang)) {
//   //     try {
//   //       return hljs.highlight(lang, str).value
//   //     } catch (__) {}
//   //   }    
//   //   return '' // use external default escaping
//   // }
// })

// mdjs.use(emoji)
// .use(subscript)
// .use(superscript)
// .use(footnote)
// .use(deflist)
// .use(abbreviation)
// .use(insert)
// .use(mark)
// .use(tasklists)

// export {mdjs}

export const createMdParse = () => {
  const mdjs = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    // highlight: function (str, lang) {
    //   if (lang && hljs.getLanguage(lang)) {
    //     try {
    //       return hljs.highlight(lang, str).value
    //     } catch (__) {}
    //   }    
    //   return '' // use external default escaping
    // }
  })
  
  mdjs.use(emoji)
  .use(subscript)
  .use(superscript)
  .use(footnote)
  .use(deflist)
  .use(abbreviation)
  .use(insert)
  .use(mark)
  .use(tasklists)

  return mdjs
}