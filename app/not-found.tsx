import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function NotFound() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}>
      <div className="text-left">
        <h1 className="text-[32px] leading-tight">404</h1>
        <p className="text-[32px] leading-tight">Page Not Found</p>
      </div>
    </main>
  );
}
