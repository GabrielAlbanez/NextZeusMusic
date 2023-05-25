import TypewriterComponent from "typewriter-effect";

export default function BackImg() {
  return (
    <>
      <div className="fixed h-screen w-screen z-0 bg-neutral-900">
        <h2 className="digitando">
          <Typewriter options={{
            strings : ["Bem", "Vindo", "Ao","ZeusMusic"],
            auto : true,
            loop : true,
          }}/>        
        </h2>
      </div>
    </>
  );
}
