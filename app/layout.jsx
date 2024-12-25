// app/layout.js

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import "./globals.css"
import { ClientLayout } from "./layouts/ClientLayout";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Kaju Basket",
  description: "Premium Cashews Delivered Fresh to Your Doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        <ClientLayout>
          <Toaster
            toastOptions={{
              style: {
                border: "1px solid #713200",
                padding: "16px",
                color: "#713200",
              },
              success: {
                icon: "✅",
              },
              error: {
                icon: "❌",
              },
            }}
          />

          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
