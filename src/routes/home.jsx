import Pokedex from '../components/pokedex';

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-8 mt-8">
            <h1 className="font-mono text-5xl font-bold">Pokédex</h1>
            <Pokedex />
        </div>
    );
}
