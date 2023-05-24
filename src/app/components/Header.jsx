import Image from 'next/image';
import Logo from '../assets/img/zuescara2.gif';


export default function Header() {
  return (
    <header className="bg-zinc-950 flex items-center justify-between h-16 px-10">
      <div className='flex items-center gap-10'><p className="text-white text-3xl">ZeusMusic</p> <Image src={Logo} alt = "logo" className='w-14 h-12'/> </div>
      <div className="flex gap-3 text-center items-center  w-1/3 justify-evenly pl-24 ">
        <div className=''><button className="text-white  bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-24 h-10">Logar</button></div>
        <div><button className="text-white  bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-24 h-10">Registrar-se</button></div>
      </div>
    </header>
  )
}

