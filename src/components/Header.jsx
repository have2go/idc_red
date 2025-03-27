"use client";
import gerb from "../../public/gerb.png";
import flagRu from "../../public/flag_rus.png";
import flagCh from "../../public/flag_ch.png";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full h-16 sm:h-20 flex items-center bg-[#ee1c25] text-white fixed z-50">
            <div className="max-w-[1200px] w-full flex items-center mx-auto justify-between px-2 xs:px-4 lg:px-6">
                {/* Левая часть: логотип и текст */}
                <div className="flex gap-2 lg:gap-4 items-center">
                    <Image
                        id="logo"
                        src={gerb}
                        alt="Герб"
                        fetchPriority="high"
                        unoptimized={true}
                        width={70} // Исходный размер для десктопа
                        height={70}
                        className="bg-white p-[8px] rounded-md w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]"
                    />
                    <p className="leading-4 hidden text-lg lg:text-base lg:leading-5 sm:text-sm sm:block">
                        ИНФОРМАЦИОННО-ДЕЛОВОЙ
                        <br className="" />
                        ЦЕНТР САНКТ-ПЕТЕРБУРГА
                        <br className="" />
                        В КИТАЕ
                    </p>
                </div>

                {/* Правая часть: навигация и флаги */}
                <div className="flex gap-4 items-center">
                    {/* Навигация для больших экранов */}
                    <div className="hidden md:flex gap-2 lg:gap-6 lg:pr-4 font-semibold text-base lg:text-lg md:text-sm">
                        <a
                            href="#about"
                            className="transition-all hover:scale-105"
                        >
                            О центре
                        </a>
                        <a
                            href="#goals"
                            className="transition-all hover:scale-105"
                        >
                            Цели и задачи
                        </a>
                        <a
                            href="#nanning"
                            className="transition-all hover:scale-105"
                        >
                            Местоположение
                        </a>
                        <a
                            href="#contacts"
                            className="transition-all hover:scale-105"
                        >
                            Контакты
                        </a>
                    </div>

                    {/* Флаги */}
                    <div className="flex gap-2 items-center">
                        <Image
                            src={flagRu}
                            alt="Русский язык"
                            className="border border-gray-300 cursor-pointer w-6 h-auto"
                            width={32}
                            height={20}
                            unoptimized={true}
                        />
                        <Image
                            src={flagCh}
                            alt="Китайский язык"
                            className="border border-gray-300 opacity-30 cursor-not-allowed w-6 h-auto"
                            width={32}
                            height={20}
                            unoptimized={true}
                        />
                    </div>

                    {/* Бургер-меню для мобильных устройств */}
                    <button
                        className="block md:hidden text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    {/* Навигация для мобильных устройств */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute py-2 top-16 left-0 w-full bg-[#ee1c25] shadow-b-custom md:relative md:top-0 md:w-auto md:flex md:gap-6 lg:gap-8 font-semibold text-base lg:text-lg md:text-sm text-center z-30 border-t-[1px]"
                            >
                                {/* Анимированные ссылки */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        delay: 0.2, // Задержка появления текста
                                        duration: 0.3,
                                    }}
                                >
                                    <a
                                        href="#about"
                                        className="block w-fit mx-auto px-4 py-2 transition-all hover:scale-105"
                                        onClick={() => setIsMenuOpen(false)} // Закрыть меню после клика
                                    >
                                        О центре
                                    </a>
                                    <a
                                        href="#goals"
                                        className="block w-fit mx-auto px-4 py-2 transition-all hover:scale-105"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Цели и задачи
                                    </a>
                                    <a
                                        href="#nanning"
                                        className="block w-fit mx-auto px-4 py-2 transition-all hover:scale-105"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Местоположение
                                    </a>
                                    <a
                                        href="#contacts"
                                        className="block w-fit mx-auto px-4 py-2 transition-all hover:scale-105"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Контакты
                                    </a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}