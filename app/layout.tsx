import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='w-full overflow-x-hidden'>
      <body className='bg-[#262626] w-full'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
