import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 Made by
                    <a
                        href="https://github.com/tanselbay1"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-3 text-gray-500 hover:text-gray-400"
                    >
                        Tansel
                    </a>
                    <span className="ml-2">&</span>
                    <a
                        href="https://github.com/kapaha"
                        target="_blank"
                        rel="noreferrer"
                        className="ml-2 text-gray-500 hover:text-gray-400"
                    >
                        Kai
                    </a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 justify-center text-sm font-medium no-underline text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a
                            href="#"
                            className="mx-4 hover:underline md:mr-6 text-gray-500 hover:text-gray-400"
                            onClick={window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })}
                        >
                            Back to Top
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="mr-4 hover:underline md:mr-6 text-gray-500 hover:text-gray-400"
                        >
                            Back to Pokedex
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
