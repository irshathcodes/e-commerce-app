import styles from "./hero.module.css";
import classNames from "classnames/bind";

function Hero() {
	const cn = classNames.bind(styles);

	return (
		<>
			<div className={cn("hero_container")}>
				<h1>Wear your best moments!</h1>
				<p>Handcrafted clothes for the Boys</p>
				<button>Shop Now</button>
			</div>
		</>
	);
}

export default Hero;
