import { motion, useTime, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import Logo from '../assets/img/zuescara2.gif';
// <Image src={Logo} alt="logo" className="w-14 h-12" />


export default function Header() {
  return (
    <header className="bg-zinc-950 flex flex-row sm:flex-row items-center justify-between h-20 px-3 gap-2">
      <div className="flex items-center gap-10">
        <p className="text-cyan-500 shadow-sm bg-tra  text-3xl p-0 sm:p-10">
          ZeusMusic
        </p>{" "}
      </div>
      <div className="flex gap-3 text-center items-center sm:w-1/3 justify-evenly ">
        <div className="">
        <Link href="dashboard/Login">
          <button className="text-white bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-20 h-9 text-center  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 sm:w-24 h-10">
            Logar
          </button>
          </Link>
        </div>
        <div>
        <Link href="dashboard/Registro">
          <button className="text-white bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-20 h-9 text-center  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 sm:w-24 h-10">
            Registrar
          </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
