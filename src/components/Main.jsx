import Image from "next/image";
import mainBg from "../../public/main-bg.png";
import { useTranslations } from "@/hooks/useTranslations";

export default function Main() {
    const t = useTranslations();
    return (
        <section
            id="main"
            className="w-full pt-20 relative flex h-screen xs:max-h-[660px] justify-center items-center flex-col text-white font-bold gap-5"
        >
            <h1
                className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
                dangerouslySetInnerHTML={{ __html: t?.main?.title }}
            ></h1>
            <p className="text-sm md:text-base xl:text-lg w-11/12 md:w-1/2 text-center font-medium drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                {t?.main?.subtitle}
            </p>
            <Image
                src={mainBg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority
                className="absolute top-0 left-0 -z-20"
                unoptimized={true}
            />
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-40 -z-10"></div>
        </section>
    );
}
