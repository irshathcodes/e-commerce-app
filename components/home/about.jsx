import styles from "./about.module.css";
import Image from "next/image";

function About() {
	return (
		<>
			<section className={styles.section}>
				<div className={styles.image_container}>
					<Image src="/about.svg" className={styles.image} layout="fill" />
				</div>

				<div className={styles.about_text}>
					<h1>Who We Are</h1>
					<p>
						Hello Peeps, Welcome to Cloth Zone, your number one source for Men's
						Clothing. We're dedicated to providing you the very best cloth
						material, we handcraft all the products listed in our website to
						make sure you get premium quality. Founded in 2022. Cloth Zone has
						come a long way from its beginnings. We first started this company
						with passion for providing sustainable premium quality products. We
						hope you enjoy our products as much as we enjoy offering them to
						you. If you have any questions or comments, please don't hesitate to
						contact us
					</p>
				</div>
			</section>
			<NewsLetter />
		</>
	);
}

function NewsLetter() {
	return (
		<>
			<div className={styles.newsletter}>
				<h3>Join Our NewsLetter</h3>
				<p>get the latest deals, discounts and more!</p>
				<form className={styles.textbox_wrapper}>
					<input type="email" placeholder="enter your email address" />
					<button>Subscribe</button>
				</form>
			</div>
		</>
	);
}

export default About;
