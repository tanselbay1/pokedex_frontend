import PokedexImage from '../assets/images/pokedex.png';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="mt-3 mb-5 font-mono text-5xl font-bold">Pokedex</h1>
            <img src={PokedexImage} alt="" className="rounded-md" />
        </div>
    );
}
