import { RenderContext } from "../context/Render";
import { useContext } from "react";
import { createContext, useState } from "react";
import Image from "next/image";
import ZeusCard from "../assets/img/mitologia-grega-zeus.jpg";
import PoseidonCard from "../assets/img/Poseidon.jpg";
import AriesCard from "../assets/img/aires.jpg";

const AssianturaComponent = ({ img, titulo, chindren, descricao }) => {
  const { render, setRender, cardName, setCardname } =
    useContext(RenderContext);

  return (
    <div className="bg-gradient-to-tr from-cyan-700 from-10% to-neutral-900  w-1/2 h-1/2 flex gap-56 border-2 border-white rounded-2xl relative ">
      {/* //ficar conteudo */}

      <div className="h-24 p-10 float-left z-50">
        {" "}
        <button
          onClick={() => {
            setRender(false);
          }}
          className="text-white z-50"
        >
          voltar
        </button>
      </div>
        
      <div className="flex items-center justify-center h-24  float-left">
        <h1 className="text-white text-3xl">Assinatura : {cardName} </h1>
      </div>
    

      <div className="w-full h-full absolute top-0 left-0 z-0 float-left">
        <Image src={cardName === "Zeus" ? ZeusCard : cardName === "Poseidon" ? PoseidonCard : cardName === "Aries" ? AriesCard : null} layout="fill" objectFit="cover" className="opacity-10"/></div>
    </div>
  );
};

export default AssianturaComponent;
