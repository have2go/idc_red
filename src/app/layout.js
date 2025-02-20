import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
    title: "ИДЦ",
    description: "ИНФОРМАЦИОННО-ДЕЛОВОЙ ЦЕНТР САНКТ-ПЕТЕРБУРГА В КИТАЕ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`${roboto.variable} antialiased`}>{children}</body>
        </html>
    );
}
