import "./globals.css";
import Head from "./head";


const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="pl">
      <Head />
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;