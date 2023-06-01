"use client"

import {createContext,useState,useEffect} from "react"

export const RenderContext = createContext()

export const RenderContextProvider = ({children}) =>{
    

   
  
    useEffect(() => {
      //server para guaradar no satate o valor do tamnaho da tela
  
      function colocarTamnho() {
        setTamanhoTela(window.innerWidth);
        window.addEventListener('resize', refrshPage);
      }
      
       // essa function vai refazer o load da pagina ai eu coloco ela ali na colocar tamanho ass 
       // toda vez que acontecer resize ou seja mudar o valor da tela vai chamar essa fuction ass vai resetar o tamho da tela e dar um refresh na pagina 
  
      function refrshPage(){
        location.reload();
      }
  
      // server para que acontesa um evento de resize ou seja toda vez que o tamnho de tala for redefinido vai chamar a funcition colocarTamnho consequentemente redefinindo o state de tamanho
      window.addEventListener("resize", colocarTamnho());
      setTamanhoTela(window.innerWidth);
  
      // usase o return no useEfect para quando o componente for desmontado
  
      return () => {
    
        window.removeEventListener("resize", colocarTamnho,);
        
      };
    }, []);
  
 
    const [render,setRender] = useState(false)
    const [cardName,setCardname] = useState("")
    const [tamanhoTela,setTamanhoTela] = useState(0)

    return (
        <RenderContext.Provider value={{render,setRender,cardName,setCardname,tamanhoTela,setTamanhoTela}}>
             {children}
        </RenderContext.Provider>
    )

}