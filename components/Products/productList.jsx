import Card from "../../ui/Card";
import styles from "./products.module.css";

function ProductList({ allProducts }) {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.card_container}>
					{allProducts.map((item) => (
						<Card item={item} key={item._id} />
					))}
				</div>
			</main>
		</>
	);
}

export default ProductList;
