import {createContext, useState, useContext} from 'react'
const MarkdownContext=createContext();

export const MarkdownPa=({ children })=>{
    const [text, setText]=useState("");
    const values={text, setText}

  return (
    <MarkdownContext.Provider value={values} >{children}</MarkdownContext.Provider>
  )
}

export const useMarkdown=()=>useContext(MarkdownContext)