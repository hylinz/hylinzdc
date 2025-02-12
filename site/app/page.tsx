import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex w-full">
      <div className="flex-1 justify-start w-full">
          <Image width={50} height={50} alt="Just a banana" src={"/banana.gif"}/> 
        </div>
        <div className="flex-1 flex justify-end w-full">
          <Image width={50} height={50} alt="PBJ!" src={"/banana.gif"}/> 
        </div>
      </header>

    <main className="w-full h-full flex flex-col items-center justify-center text-black">
      <h1 className="text-6xl font-extrabold drop-shadow-lg animate-bounce transition-all duration-200 ">
        HELLO!
      </h1>
      <span className="text-xl font-bold ">
        I just needed this domain for the email, but hey, why not make a silly site?
      </span>
      <span className="text-3xl font-extrabold  underline mt-5">
        If you wanna hire me, since I can center a div, email me at:
      </span>
      <a
        className="text-5xl font-extrabold text-white bg-black p-4 rounded-xl mt-4 shadow-2xl hover:scale-110 transition-transform duration-300"
        href="mailto:martin@hylinz.com"
      >
        martin@hylinz.com
      </a>
    </main>


      <footer className="w-full flex">
        <div className="flex-1 justify-start w-full">
          <Image width={50} height={50} alt="Jesus dancing like a king" src={"/jesus.gif"}/> 
        </div>
        <div className="flex-1 flex justify-end w-full">
          <Image width={50} height={50} alt="Jesus dancing like a king" src={"/jesus.gif"}/> 
        </div>
      </footer>
    </div>
  );
}
