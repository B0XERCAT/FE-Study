import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"], 
  weight: ["100", "400", "700", "900"], 
});

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Pokedex",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <nav className="flex justify-center items-center w-full h-16 border-b border-solid border-[theme(colors.primary-color)]">
          <h1 className="w-full max-w-5xl px-4">
            <Link
              href="/"
              className="text-[theme(colors.primary-color)] text-2xl no-underline font-bold hover:opacity-80"
            >
              Pokemon List
            </Link>
          </h1>
        </nav>
        <main className="flex flex-col items-center p-8 gap-8">{children}</main>
      </body>
    </html>
  );
}
