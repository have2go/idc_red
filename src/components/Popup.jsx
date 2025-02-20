export default function Popup({ city, theme, onClose }) {
    const content = city[theme];

    return (
        <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white pt-6 pb-10 px-10 rounded-lg shadow-lg max-w-[700px] text-center relative text-black"
                onClick={e => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold mb-6 text-[#0095DA]">{theme}</h3>
                <div className="flex flex-col text-left gap-3 text-lg">{content}</div> {/* Отображаем JSX-элемент */}
                <button
                    onClick={onClose}
                    className="absolute -top-7 -right-5 text-gray-500 hover:text-gray-700 text-3xl font-bold close-btn"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
