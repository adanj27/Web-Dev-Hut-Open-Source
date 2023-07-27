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
import {dracula } from '@uiw/codemirror-theme-dracula';

export function EditorTextArea({
    as = 'editorTextArea',
    className = '',
    language='html',
    jsContent ='',
    htmlContent='',
    cssContent=''
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

    
    const handleReset = () =>{
      switch(curTab){
        case 0:
          setHtml(htmlContent);
          setTempCode(htmlContent);
          break
        case 1:
          setCss(cssContent);
          setTempCss(cssContent);
          break
        case 2:
          setJs(jsContent);
          setTempJs(jsContent);
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
    

    const addExtensions = () =>{
      let extensionsList = []
      switch(language){
        case 'javascript':{
          extensionsList = [javascript({ jsx: true })]
          break
        }
        case 'html':{
          extensionsList = [cmhtml()]
          break
        }
        case 'css':{
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
          <div class="grid grid-cols-3 gap-4">
            <button key={0} className={`rounded-md flex justify-center ${curTab==0?'bg-indigo-600':'border-2'}`} onClick={()=>handleTabChange(0)}>index.html</button>
            <button key={1} className={`rounded-md flex justify-center ${curTab==1?'bg-indigo-600':'border-2'}`} onClick={()=>handleTabChange(1)}>main.css</button>
            <button key={2} className={`rounded-md flex justify-center ${curTab==2?'bg-indigo-600':'border-2'}`} onClick={()=>handleTabChange(2)}>index.js</button>
          </div>
            <div>
            <ReactCodeMirror
              value={curTab==0?html:curTab==1?ecss:ejs}
              height="400px"
              onError={handleError}
              className="text-lg rounded-md"
              theme={dracula}
              extensions={addExtensions()}
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