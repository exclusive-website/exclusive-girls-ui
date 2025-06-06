import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import './globals.css';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='w-full overflow-x-hidden'>
      <Head>
        <meta charSet="UTF-8" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-[#262626] w-full'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
