import type { Metadata } from "next";
import "../globals.css";
import NavigationBar from "@/components/sections/NavigationBar";
import Footer from "@/components/sections/Footer";


export const metadata: Metadata = {
  title: "Safe Scheme",
  description: "The best task manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NavigationBar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
