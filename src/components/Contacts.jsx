"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import gerb from "../../public/gerb_big.png";
import Image from "next/image";

export default function Contacts() {
    const [buttonStatus, setButtonStatus] = useState(null);
    const form = useRef();

    const handleSubmit = async e => {
        e.preventDefault();
        setButtonStatus("loading");

        try {
            await emailjs.sendForm("service_nym08x5", "template_7m7ix4u", form.current, {
                publicKey: "81prC8--TDUXDmNKR",
            });

            setButtonStatus("success");
            form.current.reset();
        } catch (error) {
            console.error("Ошибка при отправке:", error);
            setButtonStatus("error");
        }

        setTimeout(() => {
            setButtonStatus(null);
        }, 3000);
    };

    return (
        <section
            id="contacts"
            className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm xl:pt-12 xl:pb-16 xl:text-lg"
        >
            <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-6 xl:mb-10">Контакты</h2>

            {/* Основной контейнер с контактами */}
            <div className="flex flex-col sm:flex-row gap-8">
                {/* Левая колонка - Наньнин */}
                <div className="w-full sm:w-1/2 space-y-6">
                    <h3 className="text-[#ee1c25]  text-2xl text-center font-bold">Наньнин</h3>
                    <div className="space-y-4 max-w-[400px] mx-auto">
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
                            <span>info@ibc-cn.cn.com</span>
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
                            <span>
                                Провинция Гуанси, г. Наньнин, район Лянцин, финансовый центр Цяньхай Жэньшоу, корпус Т1,
                                4502-4503, Сторона Б
                            </span>
                        </div>
                        <p className="text-xl text-[#ee1c25] font-semibold">Оператор:</p>
                        <div className="flex flex-col gap-1">
                            <p className="">ООО ТК "Информационный сервис"</p>
                            <p className="">
                                Генеральный директор: <span className="font-medium">Аршавский Валерий</span>
                            </p>
                        </div>
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
                            <span>+7 (921) 999-25-25</span>
                        </div>
                    </div>
                </div>

                {/* Правая колонка - Циндао */}
                <div className="w-full sm:w-1/2 space-y-6">
                    <h3 className="text-[#ee1c25] text-2xl text-center font-bold mb-6">Циндао</h3>
                    <div className="space-y-4 max-w-[400px] mx-auto">
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
                            <span>info@ibc-cn.cn.com</span>
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
                            <span>
                                Провинция Шаньдун, город Циндао, район Шибэй, улица Гуаньтао, дом 34, 1 этаж, пом. 101,
                                266011
                            </span>
                        </div>
                        <p className="text-xl text-[#ee1c25] font-semibold">Оператор:</p>
                        <div className="flex flex-col gap-1">
                            <p className="">ООО "Информационно-деловой центр"</p>
                            <p className="">
                                Генеральный директор: <span className="font-medium">Чернухин Алексей</span>
                            </p>
                        </div>
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
                            <span>+7 (911) 000-17-71</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-12" />
            {/* Нижняя секция с гербом и формой */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12">
                {/* Левая половина - герб */}
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                    {/* Здесь будет герб */}
                    <Image src={gerb} alt="Логотип" className="mb-4" unoptimized={true} />
                </div>

                {/* Правая половина - форма */}
                <div className="w-full sm:w-1/2 max-w-[400px] mx-auto ">
                    <h3 className="text-[#ee1c25] text-2xl font-bold mb-6">Напишите нам</h3>
                    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                        {/* Имя */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Ваше имя
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
                                Электронная почта
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
                                Тема обращения
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
                                Сообщение
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
                            disabled={buttonStatus === "loading"}
                            className={`w-full py-2 px-4 rounded-md transition-colors ${
                                buttonStatus === "success"
                                    ? "bg-green-600 text-white"
                                    : buttonStatus === "error"
                                    ? "bg-red-600 text-white"
                                    : buttonStatus === "loading"
                                    ? "bg-[#ee1c25] text-white cursor-not-allowed"
                                    : "bg-[#ee1c25] hover:bg-[#ee1c27be] text-white"
                            }`}
                        >
                            {buttonStatus === "success" ? (
                                "Отправлено!"
                            ) : buttonStatus === "error" ? (
                                "Ошибка"
                            ) : buttonStatus === "loading" ? (
                                <div className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Отправка...
                                </div>
                            ) : (
                                "Отправить"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
