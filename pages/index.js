import Hero from "../components/home/hero";
import Intro from "../components/home/intro";
import ProductsOverview from "../components/home/productsOverview";
import About from "../components/home/about";

export default function Home() {
	return (
		<>
			<Hero />
			<Intro />
			<ProductsOverview />
			<About />
		</>
	);
}
