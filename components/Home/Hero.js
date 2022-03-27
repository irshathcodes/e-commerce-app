import styles from "./hero.module.css";

function Hero() {
	return (
		<>
			<div className={styles.hero_container}>
				<h1>Wear your best moments!</h1>
				<p>Handcrafted clothes for the Boys</p>
				<button>Shop Now</button>
			</div>
		</>
	);
}

export default Hero;
