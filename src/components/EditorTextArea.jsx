import {EditorState} from "@codemirror/state"
import {EditorView, keymap} from "@codemirror/view"
import {defaultKeymap} from "@codemirror/commands"
import { useEffect, useRef , useState} from "react"
import { Button } from "./Button"
import { MdPlayArrow } from "react-icons/md"
import { Headline } from "./Headline"
import { FilterButton } from "./FilterButton"
import {javascript} from "@codemirror/lang-javascript" //testing
import { html as cmhtml} from "@codemirror/lang-html" //can change to require() in future so we reduce load
import {css} from "@codemirror/lang-css"
import { defaultHighlightStyle} from "@codemirror/highlight"
import ReactCodeMirror from "@uiw/react-codemirror"
import * as prettier from "prettier";
import {dracula } from '@uiw/codemirror-theme-dracula';
import prettierPluginBabel from "https://unpkg.com/prettier@3.0.0/plugins/babel.mjs";
import prettierPluginEstree from "https://unpkg.com/prettier@3.0.0/plugins/estree.mjs";
import prettierPluginHtml from "https://unpkg.com/prettier@3.0.0/plugins/html.mjs";
//import * as babelParser from "@babel/parser"
import {parse as htmlParser} from 'angular-html-parser';
import hljs from "highlight.js"
import { parse as cssp } from "postcss"
//import { postcss } from "stylefmt"

//const prefixer = Postcss.sync([ autoprefixer])


export function EditorTextArea({
    as = 'editorTextArea',
    className = '',
    jsContent ='',
    htmlContent='',
    cssContent='',
    readonly=false
  }) {
    const As = as
    const editorRef = useRef()
    const frameRef = useRef()

    //html
    const [html,setHtml] = useState(htmlContent)
    const [tempCode, setTempCode] = useState(htmlContent)

    //css
    const [ecss,setCss] = useState(cssContent)
    const [tempCss, setTempCss] = useState(cssContent)

    //js
    const [ejs,setJs] = useState(jsContent)
    const [tempJs, setTempJs] = useState(jsContent)

    //combined
    const [combined,setCombined] = useState('')

    //cambiar los tabs
    const [curTab, setTab] = useState(0)

    //array of objects
    const tabArray = [
      {
      tab:0,
      content: html
      },
      {
        tab:1,
        content: ecss
      },
      {
        tab:2,
        content: ejs
      },
      
  ]

    //html combinado
    const combineAll = () =>{
      const finalScript = `<!DOCTYPE html><head><style>${tempCss}</style></head><body>${tempCode}</body><script>${tempJs}</script>`
      console.log(finalScript)
      setCombined(finalScript)
    }

    //funcion de prettier para formatting de codigo
    const formatCode = async (curTab) =>{
      let formattedCode
      if(curTab==0){
        formattedCode = await prettier.format(html,{parser:"html",plugins:["htmlParser"]})
        setTempCode(formattedCode)
      }
      if(curTab==1){
        formattedCode = await prettier.format(css,{parser:"cssp",plugins:[cssp]})
        setTempCss(formattedCode)
      }
      if(curTab==2){
        formattedCode = await prettier.format(jsContent,{
          parser:"babel",
          plugins:[prettierPluginBabel,prettierPluginEstree]
        })
        setTempJs(formattedCode)
      }
      //return formattedCode
    }

    
    const handleReset = () =>{
      let ctn;
      switch(curTab){
        case 0:
          ctn = htmlContent
          setHtml(ctn);
          setTempCode(ctn);
          break
        case 1:
          ctn = cssContent
          setCss(ctn);
          setTempCss(ctn);
          break
        case 2:
          ctn = jsContent
          setJs(ctn);
          setTempJs(ctn);
          break
      }
    }

    const handleChange = (x) =>{
      switch(curTab){
        case 0:
          setTempCode(x);
          break
        case 1:
          setTempCss(x);
          break
        case 2:
          setTempJs(x);
          break
      }
    }

    const handleRun = () =>{
      setHtml(tempCode);
      setJs(tempJs)
      setCss(tempCss)
      combineAll()
    }

    const handleError = (e) =>{
      console.log(e)
    }

    const handleTabChange = (v) =>(v>-1 && v<3)?setTab(v):null
    

    
    const addExtensions = (tabNo) =>{
      let extensionsList = []
      switch(tabNo){
        case 0:{
          extensionsList = [javascript({ jsx: true })]
          break
        }
        case 1:{
          extensionsList = [cmhtml()]
          break
        }
        case 2:{
          extensionsList = [css()]
          break
        }

      }
      return extensionsList
    }
 
    useEffect(()=>{combineAll()},[])
  
    return (<div className="drop-shadow-lg border-solid border-2 border-white rounded-md p-4">
    <div  className="grid grid-cols-2 gap-1">
     <Headline as="h4" size="sm" className="mt-2">
            Demonstracion
          </Headline>
          <div className="grid grid-cols-2 gap-1">
          <FilterButton icon={MdPlayArrow} className="m-2" onClick={handleRun} >
          Correr
        </FilterButton>
        <FilterButton icon={MdPlayArrow} className="m-2" onClick={handleReset} >
          Restacebler
        </FilterButton>
        </div>
          </div>
          <div class="grid grid-cols-3 gap-3 m-2">
            <button disabled={html.trim().length<1}  key={0} className={`rounded-md flex justify-center ${curTab==0?'bg-indigo-600':html.trim().length<1?'slate-700 text-slate-700':'border-2'}`} onClick={()=>handleTabChange(0)}>index.html</button>
            <button disabled={ecss.trim().length<1} key={1} className={`rounded-md flex justify-center ${curTab==1?'bg-indigo-600':ecss.trim().length<1?'slate-700 text-slate-700':'border-2'}`} onClick={()=>handleTabChange(1)}>main.css</button>
            <button disabled={ejs.trim().length<1}  key={2} className={`rounded-md flex justify-center ${curTab==2?'bg-indigo-600':ejs.trim().length<1?'slate-700 text-slate-700':'border-2'}`} onClick={()=>handleTabChange(2)}>index.js</button>
          </div>
            <div>
            <ReactCodeMirror
              readOnly={readonly}
              onKeyUp={(e)=>e.key=='Enter'?formatCode(curTab):null}
              value={curTab==0?html:curTab==1?ecss:ejs}
              height="400px"
              onError={handleError}
              className="text-lg rounded-md"
              theme={dracula}
              extensions={addExtensions(curTab)}
              onChange={handleChange}
            />
          
        </div>
          
      {html.length>0 &&  <Headline as="h4" size="sm" className="mt-2">
            Producccion
          </Headline>}
       <iframe ref={frameRef} srcDoc={combined} width="100%" height="500px" className="bg-white rounded-md mt-2"></iframe>
</div>
    )
  }