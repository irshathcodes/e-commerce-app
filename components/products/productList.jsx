import React from "react";
import { useRouter } from "next/router";
import Card from "../../ui/Card";
import styles from "./products.module.css";

const sortOptions = [
	{ id: 1, name: "All", query: "all" },
	{ id: 2, name: "Recent", query: "-createdAt" },
	{ id: 3, name: "Price(Lowest)", query: "price" },
	{ id: 4, name: "Price(Highest)", query: "-price" },
];

function ProductList({ allProducts }) {
	const router = useRouter();

	const handleSortChange = (e) => {
		const category = router.query.category;
		const query = { sort: e.target.value };
		if (category) query.category = category;

		if (e.target.value === "all") router.push(router.pathname);

		router.push({
			pathname: router.pathname,
			query,
		});
	};

	const handleProductClick = (productId) => {
		router.push(router.pathname + "/" + productId);
	};
	return (
		<>
			<main className={styles.main}>
				{/* Sort */}
				<div className={styles.sort_container}>
					<div className={styles.sort_label}>
						<svg
							width="24"
							height="24"
							className={styles.sort_svg}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 13H3C2.73478 13 2.48043 13.1054 2.29289 13.2929C2.10536 13.4804 2 13.7348 2 14V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H10C10.2652 22 10.5196 21.8946 10.7071 21.7071C10.8946 21.5196 11 21.2652 11 21V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 20H4V15H9V20ZM21 2H14C13.7348 2 13.4804 2.10536 13.2929 2.29289C13.1054 2.48043 13 2.73478 13 3V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H21C21.2652 11 21.5196 10.8946 21.7071 10.7071C21.8946 10.5196 22 10.2652 22 10V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2V2ZM20 9H15V4H20V9ZM21 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V21C13 21.2652 13.1054 21.5196 13.2929 21.7071C13.4804 21.8946 13.7348 22 14 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V14C22 13.7348 21.8946 13.4804 21.7071 13.2929C21.5196 13.1054 21.2652 13 21 13ZM20 20H15V15H20V20ZM10 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V3C11 2.73478 10.8946 2.48043 10.7071 2.29289C10.5196 2.10536 10.2652 2 10 2V2ZM9 9H4V4H9V9Z"
								fill="black"
							/>
						</svg>
						<label htmlFor="sort" id="sort">
							Sort By
						</label>
					</div>
					<select
						id="sort"
						className={styles.sort_dropdown}
						onChange={handleSortChange}
					>
						{sortOptions.map(({ id, name, query }) => {
							return (
								<React.Fragment key={id}>
									<option value={query}>{name}</option>
								</React.Fragment>
							);
						})}
					</select>
				</div>

				<div className={styles.card_container}>
					{allProducts.map((item) => (
						<Card
							item={item}
							key={item._id}
							onClick={() => handleProductClick(item._id)}
						/>
					))}
				</div>
			</main>
		</>
	);
}

export default ProductList;
