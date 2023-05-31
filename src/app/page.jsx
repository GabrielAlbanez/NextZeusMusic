import Image from 'next/image'
import Header from './components/Header'
import Main from './components/Main'
import { RenderContextProvider } from './context/Render'

export default function Home() {
  return (
    <>
     <RenderContextProvider>
     <Header/>
     <Main/>
     </RenderContextProvider>
   
    </>
  )
}
