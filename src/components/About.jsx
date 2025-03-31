import { useTranslations } from "@/hooks/useTranslations";

export default function About() {
    const t = useTranslations();

    return (
        <section
            id="about"
            className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm md:pt-12 md:pb-16 sm:text-lg"
        >
            <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-2 xl:mb-6">{t?.about?.title}</h2>
            <p className="mb-3 xl:mb-4">{t?.about?.p1}</p>
            <p className="mb-3 xl:mb-4">{t?.about?.p2}</p>
            <ul className="list-none space-y-3 px-4 text-xs sm:text-base xl:px-10">
                {t?.about?.list?.map((item, index) => (
                    <li key={index} className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25]"></span>
                        {item}
                    </li>
                ))}
            </ul>
            <p className="mt-4">{t?.about?.p3}</p>
        </section>
    );
}
