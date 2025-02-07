import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "./context/AuthProvider";
import { PersistProvider } from "./context/Presist";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}>
        <AuthProvider>
          <PersistProvider>
            <main className="relative  flex flex-col min-h-screen">
              <NavBar />
              <Toaster />
              <div className="flex-grow flex-1"> {children}</div>
            </main>
          </PersistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
