"use client"
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { useState } from "react";
import AssianturaComponent from "./Assinatura";
import { RenderContext } from "../context/Render";

export default function Card({ descricao, Titulo, children, link }) {
  const { render, setRender, cardName, setCardname } = useContext(RenderContext);

  function renderComponent() {
    setRender(true);
  }

  return (
    <div className="bg-neutral-950 w-24 sm:w-full h-auto sm:h-96 flex flex-col items-center relative rounded-2xl p-10">
      <h1 className="text-cyan-500 shadow-sm shadow-cyan-500/50 text-2xl sm:text-4xl">{Titulo}</h1>
      <button className="text-white bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-20 h-9 text-center mt-16">descrições</button>

      <div className="w-full   h-full absolute top-0 left-0 z-0 overflow-hidden">
        <Image
          src={link}
          layout="fill"
          objectFit="cover"
          onClick={() => {
            renderComponent();
            setCardname(Titulo);
          }}
          className="opacity-10 cursor-pointer transition ease-in-out delay-75 duration-300 hover:scale-125 absolute"
        />
      </div>

      {render && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-30 backdrop-filter backdrop-blur-sm shadow-cyan-500/50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.5,
          }}
        >
          <AssianturaComponent />
        </motion.div>
      )}
    </div>
  );
}