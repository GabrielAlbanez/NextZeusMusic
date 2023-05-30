
import Image from "next/image";

export default function Card({ descricao, Titulo, children , link }) {
  return (
    // <div className="bg-neutral-950 w-full h-96 flex flex-col items-start p-10 rounded-2xl">
    //    <div className="flex items-center  gap-10">
    //    <div><h1 className="text-white text-4xl">{Titulo}</h1></div>
    //    <div><Image src={link} className= "w-10 h-10"/></div>
    //    </div>
      
    //   <div><h1 className="text-white">{descricao}</h1></div>
    // </div>

    <div className="bg-neutral-950 w-full h-96 flex flex-col items-start  relative rounded-2xl">
      <h1 className="text-white text-4xl">{Titulo}</h1>
     <Image src={link} className = "w-full h-full opacity-10 bg-cover bg-center absolute z-0"/>
    </div>
   

  

  );
}

   {/* <div><h1 className="text-white">{descricao}</h1></div> */}

