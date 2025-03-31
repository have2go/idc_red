"use client";
import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // Загружаем язык из localStorage или используем "ru" по умолчанию
    const [language, setLanguage] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("language") || "ru"; // "ru" — значение по умолчанию
        }
        return "ru";
    });

    // Сохраняем выбранный язык в localStorage при его изменении
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem("language", language);
        }
    }, [language]);

    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
