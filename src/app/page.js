"use client";
import { useEffect } from "react";
import About from "@/components/About";
import Goals from "@/components/Goals";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Spb from "@/components/Spb";
import Nanning from "@/components/Nanning";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
    useEffect(() => {
        // Функция для блокировки копирования
        const handleCopy = e => {
            // Проверяем, является ли целевой элемент или его родитель элементом с классом allow-select
            const isAllowSelect = e.target.closest(".allow-select");
            if (!isAllowSelect) {
                e.preventDefault(); // Блокируем копирование, если элемент не разрешен
                console.log("Копирование запрещено");
            }
        };

        // Функция для блокировки горячих клавиш
        const handleKeyDown = e => {
            // Проверяем, нажата ли комбинация Ctrl+C или Cmd+C
            if ((e.ctrlKey || e.metaKey) && e.key === "c") {
                // Проверяем, является ли целевой элемент или его родитель элементом с классом allow-select
                const isAllowSelect = e.target.closest(".allow-select");

                // Дополнительно проверяем, есть ли выделенный текст
                const selection = window.getSelection();
                const selectedText = selection.toString().trim();

                // Разрешаем копирование, если:
                // 1. Элемент имеет класс allow-select
                // 2. Есть выделенный текст
                if (!isAllowSelect && !selectedText) {
                    e.preventDefault(); // Блокируем действие, если элемент не разрешен
                    console.log("Горячие клавиши для копирования заблокированы");
                }
            }
        };

        // Добавляем обработчики событий
        document.addEventListener("copy", handleCopy);
        document.addEventListener("keydown", handleKeyDown);

        // Очищаем обработчики при размонтировании компонента
        return () => {
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <Header />
            <Main />
            <About />
            <Spb />
            <Goals />
            <Nanning />
            <Contacts />
            <Footer />
        </>
    );
}
