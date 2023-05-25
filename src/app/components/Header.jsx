import Image from 'next/image';
// import Logo from '../assets/img/zuescara2.gif';
// <Image src={Logo} alt = "logo" className='w-14 h-12'/>

export default function Header() {
  return (
    <header className="bg-zinc-950 flex items-center justify-between h-20 px-10">
      <div className='flex items-center gap-10'><p className="text-white text-3xl">ZeusMusic</p>  </div>
      <div className="flex gap-3 text-center items-center  w-1/3 justify-evenly pl-24 ">
        <div className=''><button className="text-white  bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-24 h-10 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">Logar</button></div>
        <div><button className="text-white  bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-24 h-10 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">Registrar-se</button></div>
      </div>
    </header>
  )
}

