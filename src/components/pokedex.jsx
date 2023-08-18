import { usePokemon } from '../context/pokemonContext';
import { useState } from 'react';

export default function Pokedex() {
    const pokemons = usePokemon();
    const [typedName, setTypedName] = useState('');
    const [imageUrl, setImageUrl] = useState(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/200.png',
    );

    let handleChange = ({ target }) => {
        setTypedName(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pokemons[0].name);
        console.log(typedName);
        console.log(pokemons[0]);
        pokemons.map((pokemon) => {
            // console.log(pokemon.name + ' ' + typedName);
            if (pokemon.name == typedName) {
                setImageUrl(() => pokemon.imageUrl);
            }
        });
    };
    return (
        <div className="bg-red-500 w-full p-4 space-y-4 rounded-lg max-w-md">
            <div
                className={`aspect-square max-w-[150px] sm:max-w-[200px] mx-auto bg-cover bg-[url('${imageUrl}')]`}
            ></div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    className="text-black px-2 py-1"
                    type="text"
                    value={typedName}
                    onChange={handleChange}
                />
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
