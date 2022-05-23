import styles from "./Card.module.css";
import Image from "next/image";

function Card({ item, onClick }) {
	return (
		<>
			<div className={styles.image_wrapper} onClick={onClick}>
				<Image
					className={styles.image}
					src={item.productImage}
					layout={"fill"}
					objectFit={"cover"}
					objectPosition={"bottom"}
					quality={100}
				/>
				<div className={styles.product_details}>
					<h3 className={styles.name}>{item.name}</h3>
					<p>₹ {item.price}</p>
				</div>
			</div>
		</>
	);
}

export default Card;
