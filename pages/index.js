import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import ProductsOverview from "../components/Home/ProductsOverview";
import About from "../components/Home/About";

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
