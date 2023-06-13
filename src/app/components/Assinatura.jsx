import { RenderContext } from "../context/Render";
import { useContext } from "react";
import { createContext, useState } from "react";
import Image from "next/image";
import ZeusCard from "../assets/img/mitologia-grega-zeus.jpg";
import PoseidonCard from "../assets/img/Poseidon.jpg";
import AriesCard from "../assets/img/aires.jpg";
import PrivilegiosAssinatura from "./PrivilegioAssinatura";

const AssianturaComponent = ({ img, titulo, chindren, descricao }) => {
  const { render, setRender, cardName, setCardname } =
    useContext(RenderContext);

  const palavraDestaque = <span>1 ano</span>;

  return (
    <div className="bg-gradient-to-tr from-neutral-900 from-40% to-cyan-700 px-10 w-full sm:w-1/2 h-auto sm:h-1/2 flex items-start justify-evenly border-2 border-white rounded-2xl relative">
      <div className="flex items-start justify-center h-24 flex-col  sm:h-10 pt-10">

        <div className="flex gap-14 flex-col absolute ">
          <button
            onClick={() => {
              setRender(false);
            }}
            className="text-white z-50 absolute"
          >
            Voltar
          </button>


        </div>

        {cardName === "Zeus" && (
          <PrivilegiosAssinatura
            descricao={"O que a assinatura Zeus lhe proporciona:"}

            tempo={`Esta assinatura possibilita você ouvir música sem anúncios por 1 ano`}
            tempo2={"1 ano"}
            privilegio1={"Você tem privilégios em qualidade sonora"}
            privilegio1m={"Qualidade sonora +"}
            privilegio2={"Você pode escutar músicas offline"}
            privilegio2m={"musicas ofline"}
            privilegio3={"Você pode compartilhar os privilégios dessa assinatura com até 4 pessoas diferentes"}
            privilegio3m={"4 acessos simultaneos"}
            custo={"264 reais"}
            custo2={"264 reais"}
          />
        )}

        
{cardName === "Poseidon" && (
          <PrivilegiosAssinatura
            descricao={"O que a assinatura Zeus lhe proporciona:"}

            tempo={`Esta assinatura possibilita você ouvir música sem anúncios por 1 ano`}
            tempo2={"1 ano"}
            privilegio1={"Você tem privilégios em qualidade sonora"}
            privilegio1m={"Qualidade sonora +"}
            privilegio2={"Você pode escutar músicas offline"}
            privilegio2m={"musicas ofline"}
            privilegio3={"Você pode compartilhar os privilégios dessa assinatura com até 4 pessoas diferentes"}
            privilegio3m={"4 acessos simultaneos"}
            custo={"264 reais"}
            custo2={"264 reais"}
          />
        )}


{cardName === "Aries" && (
          <PrivilegiosAssinatura
            descricao={"O que a assinatura Zeus lhe proporciona:"}

            tempo={`Esta assinatura possibilita você ouvir música sem anúncios por 1 ano`}
            tempo2={"1 ano"}
            privilegio1={"Você tem privilégios em qualidade sonora"}
            privilegio1m={"Qualidade sonora +"}
            privilegio2={"Você pode escutar músicas offline"}
            privilegio2m={"musicas ofline"}
            privilegio3={"Você pode compartilhar os privilégios dessa assinatura com até 4 pessoas diferentes"}
            privilegio3m={"4 acessos simultaneos"}
            custo={"264 reais"}
            custo2={"264 reais"}
          />
        )}
 

 


      </div>
      <div>
        <div className="h-96   pt-9 pb-9 px-10 z-50 flex flex-col justify-between ml-24">
          {/* <button
            onClick={() => {
              setRender(false);
            }}
            className="text-white z-50"
          >
            Voltar
          </button> */}
          <div>
            <button className="text-white z-50 relative bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-20 h-9 text-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
              Assinar
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-0 float-left">
        <Image
          src={
            cardName === "Zeus"
              ? ZeusCard
              : cardName === "Poseidon"
                ? PoseidonCard
                : cardName === "Aries"
                  ? AriesCard
                  : null
          }
          layout="fill"
          objectFit="cover"
          className="opacity-10"
        />
      </div>
    </div>
  );
};

export default AssianturaComponent;