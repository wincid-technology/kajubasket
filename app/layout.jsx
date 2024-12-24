// app/layout.js

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css"

export const metadata = {
  title: "Kaju Basket",
  description: "Premium Cashews Delivered Fresh to Your Doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
