import Navbar from "@/components/Navbar";
import "../styles/globals.scss";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
