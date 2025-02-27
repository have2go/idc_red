import gerb from "../../public/gerb.png"
import flagRu from "../../public/flag_rus.png";
import flagCh from "../../public/flag_ch.png";
import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full h-20 flex items-center bg-[#ee1c25] text-white ">
            <div className="max-w-[1200px] w-full flex items-center mx-auto justify-between">
                <div className="flex gap-3 items-center">
                    <Image
                        id="logo"
                        src={gerb}
                        alt=""
                        fetchPriority="high"
                        unoptimized={true}
                        width={56}
                        className="bg-white p-[6px] rounded-md"
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
                        <a href="#about" className="transition-all hover:scale-105">
                            О центре
                        </a>
                        <a href="#goals" className="transition-all hover:scale-105">
                            Цели и задачи
                        </a>
                        <a href="#nanning" className="transition-all hover:scale-105">
                            Местоположение
                        </a>
                        <a href="#contacts" className="transition-all hover:scale-105">
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
