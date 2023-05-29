"use client";

import { motion, useTime, useTransform } from "framer-motion";
import React, { useEffect } from "react";
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
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-neutral-900 h-screen w-screen"
    >
      <section className=" h-1/2 w-screen p-16 flex flex-col gap-20 justify-center items-center">
        <h1 className="text-white text-7xl">
          Bem Vindo a{" "}
          <span className=" text-cyan-500 shadow-sm  shadow-cyan-500/50">
            ZeusMusic!
          </span>{" "}
        </h1>
        <div className="flex items-center justify-center gap-20 flex-col pt-10">
          <p className="text-3xl text-white">
            "ZuesMusic é um site de musica intuitivo e sofisticado"
          </p>
          <p className="text-3xl text-white">
            "Navegue por um oceano de gêneros musicais e mergulhe na
            diversidade"
          </p>
          <p className="text-2xl text-white"></p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-white text-6xl h-1/2 flex justify-center items-center">
          Artistas mais tocados do momento
        </h1>
        <figure className=" flex items-center justify-center">
          <motion.div className="carousel  w-screen h-96 flex ">
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
              className="flex gap-6 items-center  justify-center "
            >
              {imagens.map((imagenzinha) => (
                <motion.div
                  key={imagenzinha}
                  className="min-w-400px min-h-200px"
                >
                  <Image
                    src={imagenzinha}
                    alt="iamgensCard"
                    className="w-full h-80 rounded-lg shadow-xl  shadow-cyan-500/50"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </figure>
      </section>
        
      <section className ="h-3/4 bg-gradient-to-t from-cyan-700  to-neutral-900 to-80% ">
        <div className="flex items-center justify-center pt-16">
      <h1 className="text-white text-6xl">Assinaturas</h1>
      </div>
        <div className=" seguradora flex justify-evenly items-center gap-10 pt-14 px-10">
        <Card/>
        <Card/>
        <Card/>
        </div>
        
      </section>
    </motion.main>
  );
}
