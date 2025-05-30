export default function Home() {
  return (
  <div className="h-screen w-full flex flex-col items-center justify-center text-black text-center">
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold">HELLO!</h1>
      <span className="text-lg">
        I just needed this domain for the email, but hey, here we are.
      </span>
      <span className="text-lg">
        If you wanna hire me, since I can clearly  <span className="inline-block skew-y-6">center</span> a div, email me at:
      </span>
      <a
        className="text-blue-600 underline"
        href="mailto:martin.carlsson@hylins.com"
      >
        martin.carlsson@hylins.com
      </a>
    </div>
  </div>
  );
}
