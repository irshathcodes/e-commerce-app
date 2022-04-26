import Image from "next/image";
import styles from "./ProductsOverview.module.css";
import Card from "../../ui/Card";

const featuredProducts = [
	{
		id: 1,
		url: "/t-shirt.jfif",
		name: "Regular Fit Round-neck T-shirt",
		price: 399,
	},
	{
		id: 2,
		url: "/hoodie.jfif",
		name: "Relaxed Fit Hoodie",
		price: 2299,
	},
	{
		id: 3,
		url: "/shirt.jfif",
		name: "Regular Fit Resort shirt",
		price: 799,
	},
];

function ProductsOverview() {
	return (
		<>
			<section className={styles.products_overview}>
				<h1>New Collection</h1>
				<div className="underline"></div>

				<div className={styles.image_container}>
					{featuredProducts.map((item) => {
						return <Card item={item} key={item.id} />;
					})}
				</div>
				<div className={styles.btn_container}>
					<button>View All</button>
				</div>
			</section>
		</>
	);
}

export default ProductsOverview;
