import styles from "./hero.module.css";
import Link from "next/link";

function Hero() {
	return (
		<>
			<div className={styles.hero_container}>
				<h1>Wear your best moments!</h1>
				<p>Handcrafted clothes for the Boys</p>
				<Link href="/products">
					<button>Shop Now</button>
				</Link>
			</div>
		</>
	);
}

export default Hero;
