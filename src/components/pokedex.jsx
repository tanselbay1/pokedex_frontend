export default function Pokedex() {
    return (
        <div className="bg-red-500 w-full p-4 space-y-4 rounded-lg max-w-md">
            <div className="bg-gray-400 aspect-square max-w-[150px] sm:max-w-[200px] mx-auto"></div>
            <form className="flex flex-col gap-4">
                <input className="text-black px-2 py-1" type="text" />
                <button
                    className="bg-white px-2 py-1 text-black rounded-md"
                    type="submit"
                >
                    Search
                </button>
            </form>
            <p className="bg-white text-red-700 font-bold px-2 py-1">Error</p>
        </div>
    );
}
