import Image from "next/image";
import Link from "next/link";

import Google from "../../assets/img/google.png";


const Login = () => {
  return (
    <>
      <div className="  w-screen h-screen bg-gradient-to-t from-3% from-cyan-700  to-neutral-900  flex flex-col items-center justify-start">
        <header className="bg-transparent w-full h-1/4 p-10 ">
          <p className="text-white">
            <Link href="/">voltar </Link>
          </p>{" "}
        </header>
        <div className="  w-1/4 h-1/2 bg-neutral-900 flex items-center flex-col justify-center shadow-2xl shadow-cyan-500/50 rounded-2xl">
            <div><p className="text-white text-4xl">Login</p></div>
            <div className="h-6"></div>
          <form
            action=""
            className="flex flex-col relative max-w-full mx-auto p-4 bg-transparent  rounded-lg shadow-md shadow-cyan-500/50"
          >
            <label className="text-white mb-1">Email</label>
            <input
              type="text"
              name=""
              id=""
              className="px-4 py-2 rounded-2xl bg-white  text-gray-800 w-80 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-700"
            />

            <div className="h-10"></div>

            <label className="text-white mb-1">Senha</label>
            <input
              type="password"
              name=""
              id=""
              className="px-4 py-2 rounded-2xl bg-white text-gray-800 w-80 mb-3 focus:outline-none focus:ring-2 focus:ring-cyan-700 "
            />

            <div className="h-6"></div>

            <button className="bg-cyan-400 shadow-2xl shadow-cyan-500/50 text-white font-bold py-2 px-4 rounded">
              Logar
            </button>
          </form>
          <div className="h-8"></div>
          <div className="w-full">
            <ol className="flex justify-around items-center gap-20">
              <li>
                {" "}
                <Link href="dashboard/Registro">
                <button className="text-white bg-cyan-500 shadow-lg rounded-lg shadow-cyan-500/50 w-20 h-9 text-center  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 sm:w-24 h-10">
                  Registre-se
                </button>
                </Link>
              </li>
              <li className="mt-2" ><button className="bg-white rounded-xl shadow-lg   shadow-cyan-500/50" ><Image src={Google} className = "w-10"/></button></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
