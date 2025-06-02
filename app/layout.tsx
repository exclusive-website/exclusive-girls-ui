import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bold text-green-500 text-5xl">
        <h1>hello there</h1>
        {children}
      </body>
    </html>
  );
}
