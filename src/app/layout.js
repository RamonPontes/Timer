import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex items-center justify-center h-screen">
        {children}
      </body>
    </html>
  );
}
