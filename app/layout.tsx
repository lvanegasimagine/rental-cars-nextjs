import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Outfit } from 'next/font/google'
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Admin TarreCars",
  description: "Course rental cars by tarredev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        {children}
      </body>
    </html>
  );
}
