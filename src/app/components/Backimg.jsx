"use client"
import Typewriter from "typewriter-effect";


export default function BackImg() {
  return (
    <>
      <div className="fixed h-screen w-screen z-0 bg-neutral-900">
        <h1 className="text-white">
          Bem vindo
          <Typewriter 
           options={{
            strings : ["Bem", "Vindo", "Ao","ZeusMusic"],
            auto : true,
            loop : true,
          }}/>        
        </h1>
      </div>
    </>
  );
}
