import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import Player from './audioPlayer';
import pokeSound from '../assets/audio/gotta-catch-em-all.mp3';
import logo from '../assets/images/logo.webp';

const navigation = [
    { name: 'Pokedex', href: '/' },
    { name: 'Pokemon List', href: '/pokemon-list' },
];

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="bg-white dark:bg-gray-800 rounded-md main-nav"
        >
            {({ open }) => (
                <>
                    <div className="mx-auto container px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 dark:text-white hover:text-white hover:bg-gray-700  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800 dark:focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link to="/">
                                        <img
                                            className="h-10 w-auto"
                                            src={logo}
                                            alt="Your Company"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                to={item.href}
                                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Player url={pokeSound} />
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 ">
                            {navigation.map((item) => (
                                <NavLink
                                    key={item.name}
                                    to={item.href}
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
