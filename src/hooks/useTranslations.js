"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export const useTranslations = () => {
    const { language } = useLanguage();
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        import(`../locales/${language}.json`)
            .then(module => {
                setTranslations(module.default);
            })
            .catch(err => console.error("Ошибка загрузки переводов:", err));
    }, [language]);

    return translations;
};
