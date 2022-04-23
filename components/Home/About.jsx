import styles from "./About.module.css";

function About() {
	return (
		<section className={styles.section}>
			<h1>About Us</h1>
			<div className="underline" style={{ paddingInline: "2rem" }}></div>
			<p>
				Welcome to <span>Cloth Zone</span>, your number one source for Men's
				Clothing. We're dedicated to providing you the very best cloth material,
				we handcraft all the products listed in our website to make sure you get
				premium quality. Founded in 2022. Cloth Zone has come a long way from
				its beginnings. We first started this company with passion for providing
				sustainable premium quality products. We hope you enjoy our products as
				much as we enjoy offering them to you. If you have any questions or
				comments, please don't hesitate to contact us.
				<span>Sincerely - Cloth Zone</span>
			</p>
		</section>
	);
}

export default About;
