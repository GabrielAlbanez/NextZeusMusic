"use client"

import {createContext,useState} from "react"

export const RenderContext = createContext()

export const RenderContextProvider = ({children}) =>{

    const [render,setRender] = useState(false)
    const [cardName,setCardname] = useState("")

    return (
        <RenderContext.Provider value={{render,setRender,cardName,setCardname}}>
             {children}
        </RenderContext.Provider>
    )

}