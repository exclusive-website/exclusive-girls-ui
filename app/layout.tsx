import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="text-brand font-playfair font-bold">Hello Tailwind</h1>
        <p className="text-text-medium font-parkinsans font-regular">Welcome to the new configuration.</p>
        {children}
      </body>
    </html>
  );
}
