"use client";
import Image from "next/image";
import spbBg from "../../public/spb-bg.png";
import { spb } from "@/constants/spb";
import { useState, useEffect } from "react";
import Popup from "./Popup";

export default function Spb() {
    const [selectedTheme, setSelectedTheme] = useState(null);

    useEffect(() => {
        if (selectedTheme) {
            document.body.style.overflow = "hidden"; // Блокируем скролл
        } else {
            document.body.style.overflow = ""; // Разблокируем скролл
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedTheme]);

    return (
        <section
            id="spb"
            className="w-full relative flex xl:min-h-[660px] h-full items-center flex-col text-white gap-5"
        >
            <div className="w-full h-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm xl:pt-12 xl:pb-16 xl:text-lg">
                <h2 className="text-2xl xl:text-3xl font-bold mb-2 xl:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]">
                    Санкт-Петербург
                </h2>
                <p className="text-sm xl:text-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3">
                    Санкт-Петербург, также известный как "Северная столица", — это один из самых красивых и культурно
                    значимых городов России.
                </p>
                <p className="text-sm xl:text-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3">
                    Основанный Петром I в 1703 году, он стал символом модернизации России и ее выхода на мировую арену.
                    Город славится своими историческими достопримечательностями, уникальной архитектурой, каналами и
                    мостами.
                </p>
                <div className="flex gap-5 xl:gap-10 justify-center py-4 xl:pt-20 flex-wrap ">
                    {Object.keys(spb).map((theme, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTheme(theme)}
                            className="bg-[#ee1c25] hover:bg-[#ee1c27d7] text-white font-semibold py-2 px-4 xl:py-4 xl:px-8 rounded transition-all"
                        >
                            {theme}
                        </button>
                    ))}
                </div>
            </div>

            <Image
                src={spbBg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
                className="absolute top-0 left-0 -z-20"
                unoptimized={true}
            />
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-70 -z-10"></div>
            {selectedTheme && <Popup city={spb} theme={selectedTheme} onClose={() => setSelectedTheme(null)} />}
        </section>
    );
}
