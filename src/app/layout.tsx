import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className="bg-gray-100 w-full">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
