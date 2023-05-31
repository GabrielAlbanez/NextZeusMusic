"use client"

import { useState, useEffect } from "react";
import Espacamento from "./Espacamento";
import ZeusCard from "../assets/img/ZeusCard.jpg";
import PoseidonCard from "../assets/img/Poseidon.jpg";
import AriesCard from "../assets/img/aires.jpg";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import iamge1 from "../assets/img/Acdcx.jpg";
import iamge2 from "../assets/img/Codplay.jpg";
import iamge3 from "../assets/img/Enimen.jpg";
import iamge4 from "../assets/img/Marron FIve.jpg";
import Card from "./Card";

const imagens = [
  iamge1,
  iamge2,
  iamge3,
  iamge4,
  iamge1,
  iamge2,
  iamge3,
  iamge4,
];

export default function Main() {
  //state para salvar o tamnho recebido da tela

  const [tamanhoTela, setTamanhoTela] = useState(0);

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

 

  console.log(tamanhoTela);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-neutral-900 min-h-screen"
    >
      <section className="py-16 sm:py-32 px-6 sm:px-10 flex flex-col gap-10 sm:gap-20 justify-center items-center ">
        <h1 className="text-white text-4xl text-center sm:text-7xl">
          Bem Vindo a {tamanhoTela < 400 ? <Espacamento />  : false}
          <span className="text-cyan-500 shadow-sm shadow-cyan-500/50">
            ZeusMusic!
          </span>{" "}
        </h1>
        <div className="flex items-center justify-center gap-10 sm:gap-20 flex-col pt-8 sm:pt-16">
          <p className="text-lg sm:text-3xl text-center text-white">
            "ZuesMusic é um site de musica intuitivo e sofisticado"
          </p>
          <p className="text-lg sm:text-3xl text-white">
            "Navegue por um oceano de gêneros musicais e mergulhe na
            diversidade"
          </p>
          <p className="text-lg text-white"></p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 sm:gap-20 absolute">
        <h1 className="text-white text-4xl sm:text-6xl text-center flex justify-center items-center">
          Artistas mais tocados do momento
        </h1>
        <figure className="flex items-center justify-center relative">
          <motion.div className="carousel flex relative ">
            <motion.div
              animate={{
                x: ["0%", "10%", "-10%", "0%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
                yoyo: Infinity,
              }}
              className="flex gap-6 items-center justify-center "
            >
              {imagens.map((imagenzinha) => (
                <motion.div
                  key={imagenzinha}
                  className="min-w-400px min-h-200px "
                >
                  <Image
                    src={imagenzinha}
                    alt="iamgensCard"
                    className="w-full h-80 rounded-lg shadow-xl shadow-cyan-500/50"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </figure>
      </section>

      <section className="py-44 mt-96 bg-gradient-to-t from-cyan-700 to-neutral-900">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-6xl">Assinaturas</h1>
        </div>
        <div className="seguradora flex justify-evenly items-center gap-10 pt-8 sm:pt-14 px-4 sm:px-10">
          <Card link={ZeusCard} Titulo={"Zeus"}>
            Zeus
          </Card>
          <Card link={PoseidonCard} Titulo={"Poseidon"}>
            Poseidon
          </Card>
          <Card link={AriesCard} Titulo={"Aries"}>
            Aries
          </Card>
        </div>
      </section>
    </motion.main>
  );
}