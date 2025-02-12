import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-6 sm:p-10 md:p-16 lg:p-20 gap-12 font-[family-name:var(--font-geist-sans)]">
      <header className="flex w-full justify-between items-center">
        <Image width={50} height={50} alt="Just a banana" src="/banana.gif" />
        <Image width={50} height={50} alt="PBJ!" src="/banana.gif" />
      </header>

      <main className="w-full h-full flex flex-col items-center justify-center text-black text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-bounce transition-all duration-200">
          HELLO!
        </h1>
        <span className="text-lg sm:text-xl font-bold mt-2">
          I just needed this domain for the email, but hey, here we are
        </span>
        <span className="text-xl sm:text-2xl md:text-3xl font-extrabold underline mt-5">
          If you wanna hire me, since I can clearly center a div, email me at:
        </span>
        <a
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white bg-black p-4 rounded-xl mt-4 shadow-2xl hover:scale-110 transition-transform duration-300"
          href="mailto:martin@hylinz.com"
        >
          martin@hylinz.com
        </a>
      </main>

      <footer className="w-full flex justify-between items-center">
        <Image width={50} height={50} alt="Jesus dancing like a king" src="/jesus.gif" />
        <Image width={50} height={50} alt="Jesus dancing like a king" src="/jesus.gif" />
      </footer>
    </div>
  );
}
