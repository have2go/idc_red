import Image from "next/image";
import hbcLogo from "../../public/hbc-black.svg";
import { useTranslations } from "@/hooks/useTranslations";

export default function Partners() {
    const t = useTranslations();

    return (
        <section
            id="partners"
            className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm md:py-12"
        >
            <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-4 xl:mb-6 ">{t?.partners?.title}</h2>
            <div className="flex flex-col mx-auto xl:pt-4">
                <Image src={hbcLogo} alt="Highbrow Customs" width={300} className="mb-4" unoptimized={true} />
                <p className="text-base mx-auto text-gray-600">{t?.partners?.hbc}</p>
            </div>
        </section>
    );
}
