"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Registro = () => {
  const [imgPega, setImgPega] = useState(null);

  const handleImg = (evento) => {
    const img = evento.target.files[0];
    setImgPega(URL.createObjectURL(img));
  };

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-t from-3% from-cyan-700  to-neutral-900  flex flex-col items-center justify-start">
        <header className="bg-transparent w-full h-1/4 p-10 ">
          <p className="text-white">
            <Link href="/">voltar </Link>
          </p>{" "}
        </header>
        <div className="w-1/4 h-3/5 bg-neutral-900 flex items-center flex-col justify-start shadow-2xl shadow-cyan-500/50 rounded-2xl">
          <div className="h-4"></div>
          <div>
            <p className="text-white text-4xl">Perfil</p>
          </div>
          <div className="h-3"></div>
          <form
            action=""
            className="flex flex-col relative max-w-full mx-auto p-4 bg-transparent  rounded-lg shadow-md shadow-cyan-500/50"
          >
            <div className="w-full flex items-center justify-center">
              <div
                className="w-full h-28 rounded-full bg-slate-100 flex justify-center items-center relative bg-cover"
                style={{ backgroundImage: `url(${imgPega})` }}
              >
                {!imgPega && (
                  <>
                    <label htmlFor="fileInput" className="cursor-pointer">
                      +
                    </label>
                    <input
                      id="fileInput"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleImg}
                    />
                  </>
                )}
              </div>
            </div>
            <div className="h-4"></div>

            <label className="text-white mb-1">Nome</label>
            <input
              type="password"
              name=""
              id=""
              className="px-4 py-2 rounded-2xl bg-white text-gray-800 w-80 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 "
            />

            <div className="h-4"></div>

            <label className="text-white mb-1">Email</label>
            <input
              type="password"
              name=""
              id=""
              className="px-4 py-2 rounded-2xl bg-white text-gray-800 w-80 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 "
            />

            <div className="h-6"></div>

            <label className="text-white mb-1">Senha</label>
            <input
              type="password"
              name=""
              id=""
              className="px-4 py-2 rounded-2xl bg-white text-gray-800 w-80 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 "
            />

            <div className="h-4"></div>

            <button className="bg-cyan-400 shadow-2xl shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registro;
