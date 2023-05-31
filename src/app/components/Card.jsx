import Image from "next/image";

export default function Card({ descricao, Titulo, children, link }) {
  return (
    <div className="bg-neutral-950 w-full h-96 flex flex-col items-start relative rounded-2xl">
      <h1 className="text-white text-2xl sm:text-4xl">{Titulo}</h1>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <Image src={link} layout="fill" objectFit="cover" className="opacity-10" />
      </div>
      {/* <div><h1 className="text-white">{descricao}</h1></div> */}
    </div>
  );
}
