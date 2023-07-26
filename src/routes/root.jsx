import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PokedexImage from "../assets/images/pokedex.png";

export default function Root() {
  return (
    <div>
      <Navbar />
      <h1 className="mt-3 mb-5 font-mono font-bold">Pokedex</h1>
      <img src={PokedexImage} alt="" className="rounded-md" />
      <Footer />
    </div>
  );
}
