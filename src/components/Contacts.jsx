"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import gerb from "../../public/gerb_big.png";
import doc from "../../public/doc.jpg";
import Image from "next/image";
import { useTranslations } from "@/hooks/useTranslations";

export default function Contacts() {
    const t = useTranslations();

    const [buttonStatus, setButtonStatus] = useState(t?.contacts?.form?.button?.default || "Send");
    const form = useRef(); // Добавляем ref для формы

    const handleSubmit = async e => {
        e.preventDefault(); // Предотвращаем обновление страницы
        setButtonStatus(t?.contacts?.form?.button?.loading); // Устанавливаем статус загрузки

        try {
            // Отправляем форму через EmailJS
            await emailjs.sendForm(
                "service_nym08x5", // Замените на ваш Service ID
                "template_7m7ix4u", // Замените на ваш Template ID
                form.current, // Передаем форму
                {
                    publicKey: "81prC8--TDUXDmNKR", // Замените на ваш Public Key
                }
            );

            setButtonStatus(t?.contacts?.form?.button?.success); // Устанавливаем статус успеха
            form.current.reset(); // Очищаем форму
        } catch (error) {
            console.error("Ошибка при отправке:", error);
            setButtonStatus(t?.contacts?.form?.button?.error); // Устанавливаем статус ошибки
        }

        // Через 3 секунды сбрасываем статус кнопки
        setTimeout(() => {
            setButtonStatus(t?.contacts?.form?.button?.default || "Send");
        }, 3000);
    };

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
            <section
                id="contacts"
                className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm xl:pt-12 xl:pb-16 xl:text-lg allow-select"
            >
                {/* Заголовок */}
                <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-2 xl:mb-6 allow-select">
                    {t?.contacts?.title}
                </h2>

                {/* Основной контейнер */}
                <div className="flex flex-col sm:flex-row justify-between gap-8">
                    {/* Левая половина (контактная информация) */}
                    <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start gap-3">
                        {/* Картинка (замените на вашу картинку) */}
                        <Image src={gerb} alt="logo" width={200} className="mb-4" unoptimized />

                        {/* Подпись */}
                        <p
                            className="leading-6 text-center sm:text-left allow-select"
                            dangerouslySetInnerHTML={{ __html: t?.contacts?.subtitle }}
                        ></p>

                        {/* Контакты */}
                        <div className="mt-8 space-y-4">
                            {/* Телефон */}
                            <div className="flex items-center gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M16 22.621l-3.521-6.795c-.007.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.082-1.026-3.492-6.817-2.106 1.039c-1.639.855-2.313 2.666-2.289 4.916.075 6.948 6.809 18.071 12.309 18.045.541-.003 1.07-.113 1.58-.346.121-.055 2.102-1.029 2.11-1.033zm-2.5-13.621c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
                                </svg>
                                <span className="allow-select">{t?.contacts?.info?.phone}</span>
                            </div>

                            {/* Почта */}
                            <div className="flex items-center gap-2">
                                <svg
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z" />
                                </svg>
                                <span className="allow-select">{t?.contacts?.info?.email}</span>
                            </div>

                            {/* Адрес */}
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-gray-500 shrink-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                                <p className="allow-select">{t?.contacts?.info?.address}</p>
                            </div>

                            {/* Оператор */}
                            <p className="text-xl text-[#ee1c25] font-semibold">{t?.contacts?.operator?.title}</p>
                            <div className="flex flex-col gap-1">
                                <p className="allow-select">{t?.contacts?.operator?.company}</p>
                                <p className="allow-select">{t?.contacts?.operator?.director}</p>
                                <button
                                    className="text-sm text-[#0969da] lg:text-lg pt-2 cursor-pointer underline hover:opacity-65 transition-all text-left"
                                    onClick={openPopup}
                                >
                                    {t?.contacts?.operator?.certificate}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Правая половина (форма) */}
                    <div className="w-full sm:w-1/2 max-w-[400px] m-auto lg:ml-0 allow-select">
                        <h3 className="text-[#ee1c25] text-xl font-bold mb-6">{t?.contacts?.form?.title}</h3>
                        <form className="space-y-4" ref={form}>
                            {/* Имя */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    {t?.contacts?.form?.labels?.name}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ee1c25] focus:border-[#ee1c25]"
                                />
                            </div>

                            {/* Электронная почта */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    {t?.contacts?.form?.labels?.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ee1c25] focus:border-[#ee1c25]"
                                />
                            </div>

                            {/* Тема обращения */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                    {t?.contacts?.form?.labels?.subject}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ee1c25] focus:border-[#ee1c25]"
                                />
                            </div>

                            {/* Сообщение */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    {t?.contacts?.form?.labels?.message}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ee1c25] focus:border-[#ee1c25]"
                                ></textarea>
                            </div>

                            {/* Кнопка отправки */}
                            <button
                                type="submit"
                                className="w-full py-2 px-4 rounded-md bg-[#ee1c25] hover:bg-[#ee1c27be] text-white transition-colors"
                                onClick={handleSubmit}
                            >
                                {buttonStatus}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
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
