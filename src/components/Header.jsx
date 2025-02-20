import ship from "../../public/ship.svg";
import flagRu from "../../public/flag_rus.png";
import flagCh from "../../public/flag_ch.png";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-20 flex items-center">
            <div className="max-w-[1200px] w-full flex items-center mx-auto justify-between">
                <div className="flex gap-3 h-16 items-center">
                    <Image
                        id="logo"
                        src={ship.src}
                        alt=""
                        fetchPriority="high"
                        width={64}
                        height={60}
                        unoptimized={true}
                    />
                    <p className="leading-5 font-serif">
                        ИНФОРМАЦИОННО-ДЕЛОВОЙ
                        <br />
                        ЦЕНТР САНКТ-ПЕТЕРБУРГА
                        <br />В КИТАЕ
                    </p>
                </div>
                <div className="flex gap-10">
                    <div className="flex gap-7 font-semibold">
                        <a href="#about" className="">
                            О центре
                        </a>
                        <a href="#goals" className="">
                            Цели и задачи
                        </a>
                        <a href="#nanning" className="">
                            Местоположение
                        </a>
                        <a href="#contacts" className="">
                            Контакты
                        </a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image
                            src={flagRu}
                            alt="Русский язык"
                            className="border border-gray-300 cursor-pointer"
                            width={28}
                            height={20}
                            unoptimized={true}
                        />
                        <Image
                            src={flagCh}
                            alt="Китайский язык"
                            className="border border-gray-300 opacity-30 cursor-not-allowed"
                            width={28}
                            height={20}
                            unoptimized={true}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
