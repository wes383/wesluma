import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className={`${montserrat.className} text-[48px] leading-none`}>Wesluma</h1>
    </main>
  );
}
