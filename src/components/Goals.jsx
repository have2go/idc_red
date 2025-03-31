import { useTranslations } from "@/hooks/useTranslations";

export default function Goals() {
    const t = useTranslations();

    return (
        <section
            id="goals"
            className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm md:pt-12 md:pb-16"
        >
            <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-4 xl:mb-6">{t?.goals?.title}</h2>
            <ul className="list-none space-y-3 px-4 xs:px-3 text-sm sm:text-lg xl:px-10">
                {t?.goals?.list?.map((item, index) => (
                    <li key={index} className="relative pl-6">
                        <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25]"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
}
