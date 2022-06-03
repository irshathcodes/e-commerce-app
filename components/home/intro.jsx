import Image from "next/image";
import styles from "./intro.module.css";

function Intro() {
	return (
		<>
			<div className={styles.intro}>
				{/* Image Container */}
				<div className={styles.img_container}>
					<div className={styles.img_wrapper + " " + styles.shirt_img}>
						<Image
							src="/intro_2.jfif"
							className={styles.image}
							layout={"fill"}
							quality={100}
						/>
					</div>

					<div className={styles.img_wrapper}>
						<Image
							src="/intro_1.jfif"
							className={styles.image}
							layout={"fill"}
							quality={100}
						/>
					</div>
					<div className={styles.intro_text}>
						<h2>The Linen Collection</h2>
						<p>
							a modern fit with narrow shoulders and a tapered waist for a
							fitted silhouette.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intro;
