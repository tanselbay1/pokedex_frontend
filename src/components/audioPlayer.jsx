import { useState, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline';

const useAudio = (url) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);

    return (
        <button
            onClick={toggle}
            type="button"
            className="rounded-full bg-gray-800 p-1 text-white  focus:outline-none focus:ring-2  dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-0 focus:ring-gray-800"
        >
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
};

export default Player;
