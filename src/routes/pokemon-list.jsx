import { usePokemon } from '../context/pokemonContext';

const POKEMON_TYPE_COLORS = {
    normal: '#a8a77a',
    fire: '#ee8131',
    water: '#6390f0',
    electric: '#f7d02c',
    grass: '#7ac74c',
    ice: '#96d9d6',
    fighting: '#c22e28',
    poison: '#a33ea1',
    ground: '#e2bf65',
    flying: '#a98ff3',
    psychic: '#f95587',
    bug: '#a6b91a',
    rock: '#b6a136',
    ghost: '#735797',
    dragon: '#6f35fc',
    dark: '#705746',
    steel: '#b7b7ce',
    fairy: '#d685ad',
};

function Pokemon() {
    const pokemon = usePokemon();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {pokemon.map((pokemon) => (
                <div
                    key={pokemon.ndex}
                    className="flex flex-col items-center gap-4 p-4 text-black bg-white rounded-md"
                >
                    <div className="self-start text-lg font-bold">
                        {pokemon.ndex}
                    </div>
                    <img src={pokemon.imageUrl} alt="" loading="lazy" />
                    <h2 className="text-3xl font-bold">{pokemon.name}</h2>
                    <div className="flex gap-4">
                        <div
                            className="px-4 py-1 font-bold text-white rounded-md bg-"
                            style={{
                                backgroundColor:
                                    POKEMON_TYPE_COLORS[
                                        pokemon.type1.toLowerCase()
                                    ],
                            }}
                        >
                            {pokemon.type1}
                        </div>
                        {pokemon.type2 && (
                            <div
                                className="px-4 py-1 font-bold text-white rounded-md"
                                style={{
                                    backgroundColor:
                                        POKEMON_TYPE_COLORS[
                                            pokemon.type2.toLowerCase()
                                        ],
                                }}
                            >
                                {pokemon.type2}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Pokemon;
