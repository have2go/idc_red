"use client";
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
    const t = useTranslations();
    return (
        <>
            <footer className="w-full min-h-[64px] flex items-center justify-center bg-[#ee1c25] py-6 px-1 sm:px-4">
                <p
                    className="font-semibold text-center text-white text-sm sm:text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: t?.footer?.copyright }}
                ></p>
            </footer>
        </>
    );
}
