import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: "Riel Web App",
  description: "Portfolio website for Riel and an AI Assistant for Cambodia",
};

const telegraf = localFont({
  src: '../../public/fonts/Telegraf-Regular.woff',
  variable: '--font-telegraf',
  display: 'swap',
});

const glacialIndifference = localFont({
  src: '../../public/fonts/GlacialIndifference-Regular.woff2',
  variable: '--font-glacial-indifference',
  display: 'swap',
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${telegraf.variable} ${glacialIndifference.variable} antialiased overflow-x-hidden`}
      >
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}