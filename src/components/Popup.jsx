export default function Popup({ theme, translations, onClose }) {
    if (!translations) {
        return null; // Если данные не найдены, ничего не отображаем
    }

    return (
        <div
            className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            {/* Внутренний контейнер попапа */}
            <div
                className="popup-content bg-white rounded-lg shadow-lg max-w-[90%] sm:max-w-[600px] text-center relative text-black mx-auto overflow-y-auto max-h-[80vh] pb-3 sm:pt-3 sm:pb-7"
                onClick={e => e.stopPropagation()}
            >
                {/* Заголовок */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#ee1c25] sticky top-0 bg-white p-3 z-10">
                    {theme}
                    {/* Кнопка закрытия */}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-4 sm:top-0 sm:right-6 text-gray-500 hover:text-gray-700 text-3xl sm:text-4xl font-bold cursor-pointer z-50"
                    >
                        &times;
                    </button>
                </h3>

                {/* Контент */}
                <div className="flex flex-col text-left gap-3 text-base sm:text-lg px-4 sm:px-10">
                    <p>{translations.p1}</p>
                    {translations.p2 && <p>{translations.p2}</p>}
                    {translations.list && (
                        <ul className="list-none space-y-2 pl-4">
                            {translations.list.map((item, index) => (
                                <li key={index} className="relative pl-6">
                                    <span className="absolute left-0 top-2 w-2.5 h-2.5 bg-[#ee1c25]"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                    {translations.p3 && <p>{translations.p3}</p>}
                </div>
            </div>
        </div>
    );
}
