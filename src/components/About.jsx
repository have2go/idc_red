export default function About() {
    return (
        <section
            id="about"
            className="w-full max-w-[1200px] flex flex-col mx-auto px-2 xs:px-4 py-5 xs:py-7 text-sm md:pt-12 md:pb-16 sm:text-lg"
        >
            <h2 className="text-[#ee1c25] text-2xl xl:text-3xl font-bold mb-2 xl:mb-6">О центре</h2>
            <p className="mb-3 xl:mb-4">
                Инициатива открытия Информационного делового центра Санкт-Петербурга в Наньнин принадлежит администрации
                города Санкт-Петербурга и направлена на укрепление деловых связей с Китаем в различных направлениях.
            </p>
            <p className="mb-3 xl:mb-4">
                Деятельность Центра направлена на расширение торгово-экономического, научно-технического и культурного
                сотрудничества российского и китайского бизнесов при поддержке правительств китайских провинций и
                Санкт-Петербурга:
            </p>
            <ul className="list-none space-y-3 px-4 text-xs sm:text-base xl:px-10">
                <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25] "></span>
                    Выстраивание межправительственного взаимодействия, партнерских и деловых отношений между
                    правительством Санкт-Петербурга и Органами местного управления Провинций Китая
                </li>
                <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25] "></span>
                    Организация обоюдных деловых встреч, поездок
                </li>
                <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25]"></span>
                    Организация взаимодействия отраслевых предприятий России и Китая
                </li>
                <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25] "></span>
                    Организация встреч видов бизнеса двух стран, расширение торговли, установление более глубоких
                    бизнес-связей, культурных связей
                </li>
                <li className="relative pl-6">
                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25] "></span>
                    Представление инвестиционно-привлекательных проектов города Санкт-Петербурга для Китайских
                    инвесторов и партнеров. Поддержку и сопровождение проектов.
                </li>
            </ul>
            <p className="mt-4">
                Первоочередными задачами центра является развитие и продвижение делового сотрудничества двух стран.
            </p>
        </section>
    );
}
