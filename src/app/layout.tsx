import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "NeilBran - Crypto Asset Recovery",
  description: "The simplest way to recover your lost wallet password and investigate scammed crypto.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white pt-20">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
