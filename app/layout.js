import ApolloWrapper from '@/components/ApolloWrapper'; // Importe ton wrapper
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: 'Headless Wordpress Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>

        <ApolloWrapper>
          <header className='w-full flex justify-center items-center px-5'>
            <div className='rounded-full w-full px-5 max-w-lg mx-auto flex justify-center items-center py-4 bg-white/70 backdrop-blur-lg absolute top-4 z-50'>
            <nav className="px-3 flex gap-5">
              <Link href={"/"}>Accueil</Link>
              <Link href={"/blog"}>Blog</Link>
            </nav>
            </div>
          </header>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}