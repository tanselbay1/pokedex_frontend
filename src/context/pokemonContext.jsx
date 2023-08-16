import { createContext, useEffect, useState, useContext } from 'react';

const PokemonContext = createContext();

export function PokemonContextProvider({ children }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5121/Pokemon')
            .then((res) => res.json())
            .then((data) => setPokemon(data));
    }, []);

    return (
        <PokemonContext.Provider value={pokemon}>
            {children}
        </PokemonContext.Provider>
    );
}

export function usePokemon() {
    const context = useContext(PokemonContext);

    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }

    return context;
}
