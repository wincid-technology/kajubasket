// app/layouts/ClientLayout.js

"use client";
import { SessionProvider } from "next-auth/react";

// Ensures this is a client-side component


export function ClientLayout({ children }) {
  return (
    <SessionProvider >
      {children}
    </SessionProvider>
  );
}
