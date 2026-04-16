import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Providers from "@/lib/providers";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Keen-Keeper",
    description: "Keep-Keeper is a friend tracking and calling website",
};

export default function RootLayout({ children }) {
    return (
        <html data-theme="light" lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className={`${geistSans.className} min-h-full flex flex-col`}>
                <Providers>
                    <Navbar></Navbar>
                    {children}
                    <Footer></Footer>
                </Providers>
            </body>
        </html>
    );
}
