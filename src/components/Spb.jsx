"use client";
import Image from "next/image";
import spbBg from "../../public/spb-bg.png";
import { spb } from "@/constants/spb";
import { useState } from "react";
import Popup from "./Popup";

export default function Spb() {
    const [selectedTheme, setSelectedTheme] = useState(null);

    return (
        <section
            id="spb"
            className="w-full relative flex h-[660px] justify-center items-center flex-col text-white gap-5"
        >
            <div className="w-full h-full max-w-[1200px] flex flex-col mx-auto py-12 text-lg">
                <h2 className="text-3xl font-bold mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]">Санкт-Петербург</h2>
                <p className="text-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    Санкт-Петербург, также известный как "Северная столица", — это один из самых красивых и культурно
                    значимых городов России.
                    <br />
                    Основанный Петром I в 1703 году, он стал символом модернизации России и ее выхода на мировую арену.
                    Город славится своими историческими достопримечательностями, уникальной архитектурой, каналами и
                    мостами.
                </p>
                <div className="flex gap-10 justify-center pt-20 flex-wrap">
                    {Object.keys(spb).map((theme, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedTheme(theme)}
                            className="bg-[#ee1c25] hover:bg-[#ee1c27d7] text-white font-semibold py-4 px-8 rounded transition-all"
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
