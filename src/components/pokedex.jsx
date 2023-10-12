import { usePokemon } from '../context/pokemonContext';
import { useState } from 'react';

export default function Pokedex() {
    const pokemons = usePokemon();
    const [typedName, setTypedName] = useState('');
    const [imageUrl, setImageUrl] = useState(
        'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/150.png',
    );
    const [isError, setIsError] = useState(false);

    const handleChange = ({ target }) => {
        setTypedName(target.value);
        setIsError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Search for pokemon data, change pokedex image and return an error if "typedName" is not matching any of the pokemons.
        const foundPokemon = pokemons.find((pokemon) => {
            return pokemon.name.toLowerCase() === typedName.toLowerCase();
        });
        foundPokemon && setImageUrl(foundPokemon.imageUrl);
        setIsError(!foundPokemon);
    };

    return (
        <div className="bg-red-500 w-full p-4 space-y-4 rounded-lg max-w-md">
            <div
                className={`aspect-square max-w-[150px] sm:max-w-[200px] mx-auto`}
            >
                <img src={imageUrl} alt="" className="w-full h-full" />
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                    className="text-black px-2 py-1"
                    type="text"
                    placeholder="Please enter a pokemon name"
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
            {isError && (
                <p className="bg-white text-red-700 font-bold px-2 py-1">
                    There is no pokemon on the list as named: {typedName}
                </p>
            )}
        </div>
    );
}
