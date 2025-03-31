import { Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext"; // Импортируем контекст

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin", "cyrillic"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
    title: "ИДЦ СПб в Наньнине",
    description: "ИНФОРМАЦИОННО-ДЕЛОВОЙ ЦЕНТР САНКТ-ПЕТЕРБУРГА В КИТАЕ",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body className={`${roboto.variable} antialiased`}>
                <LanguageProvider>{children}</LanguageProvider> {/* Оборачиваем */}
            </body>
        </html>
    );
}