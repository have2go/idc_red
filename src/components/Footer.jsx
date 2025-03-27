"use client";
import React, { useState, useEffect } from "react";
import doc from "../../public/doc.jpg";
import Image from "next/image";

export default function Footer() {
    // Состояние для отслеживания видимости попапа
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Функция для открытия попапа
    const openPopup = () => {
        setPopupVisible(true);
    };

    // Функция для закрытия попапа
    const closePopup = () => {
        setPopupVisible(false);
    };

    // Эффект для управления скроллом страницы
    useEffect(() => {
        if (isPopupVisible) {
            document.body.style.overflow = "hidden"; // Отключаем скролл
        } else {
            document.body.style.overflow = ""; // Включаем скролл обратно
        }

        // Очистка эффекта при размонтировании компонента
        return () => {
            document.body.style.overflow = "";
        };
    }, [isPopupVisible]);

    return (
        <>
            {/* Футер */}
            <footer className="w-full min-h-[64px] flex items-center justify-center bg-[#ee1c25]">
                {/* Кликабельное слово "Свидетельство" */}
                <button onClick={openPopup} className="text-white font-bold text-sm lg:text-lg px-3 py-3 cursor-pointer hover:underline opacity-85">
                    Свидетельство о создании Информационно-делового центра Санкт-Петербурга в Наньнине
                </button>
            </footer>

            {/* Попап */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    {/* Фон затемнения */}
                    <div className="absolute inset-0 bg-black opacity-75" onClick={closePopup}></div>

                    {/* Содержимое попапа */}
                    <div className="relative z-10 bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full">
                        {/* Кнопка закрытия */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                        >
                            &times;
                        </button>

                        {/* Изображение свидетельства */}
                        <Image
                            src={doc} // Укажите путь к вашему изображению
                            alt="Свидетельство"
                            className="w-full h-auto"
                            unoptimized={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
