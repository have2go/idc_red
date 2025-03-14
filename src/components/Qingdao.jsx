"use client";
import qingdaoBg from "../../public/qingdao-bg.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { qingdao } from "@/constants/qingdao";
import Popup from "./Popup";

export default function Qingdao() {
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        if (selectedTheme) {
            document.body.style.overflow = "hidden";
            setIsPopupVisible(true);
        } else {
            setIsPopupVisible(false);
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedTheme]);

    return (
        <section
            id="qingdao"
            className="w-full relative flex xl:min-h-[660px] h-full items-center flex-col text-white gap-5"
        >
            <div className="w-full h-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm xl:pt-12 xl:pb-16 xl:text-lg">
                <h2 className="text-2xl xl:text-3xl font-bold mb-2 xl:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.7)]">
                    Циндао, провинция Шаньдун
                </h2>
                <p className="text-sm xl:text-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3">
                    Циндао - приморский город в провинции Шаньдун, основанный в 1891 году как стратегический порт. Его
                    название переводится как "сине-зеленый остров". После Второй мировой войны Циндао стал важным
                    экономическим центром Китая.
                </p>
                <p className="text-sm xl:text-lg drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] mb-3">
                    Современный Циндао - крупный портовый город с населением более 10 миллионов человек. Здесь развиты
                    судостроение и электроника, а благодаря мягкому морскому климату и пляжам, город привлекает туристов
                    и является местом проведения международных мероприятий.
                </p>
                <div className="flex gap-5 xl:gap-10 justify-center py-4 xl:pt-20 flex-wrap ">
                    {Object.keys(qingdao).map((theme, index) => (
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
                src={qingdaoBg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
                className="absolute top-0 left-0 -z-20"
                unoptimized={true}
            />
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-70 -z-10"></div>
            {selectedTheme && (
                <Popup
                    city={qingdao}
                    theme={selectedTheme}
                    onClose={() => setSelectedTheme(null)}
                    isVisible={isPopupVisible}
                />
            )}
        </section>
    );
}
