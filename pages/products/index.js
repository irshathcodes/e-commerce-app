import ProductList from "../../components/Products/productList";

function Products({ allProducts }) {
	return (
		<>
			<ProductList allProducts={allProducts} />
		</>
	);
}

export default Products;

export async function getStaticProps() {
	const res = await fetch(
		"https://ecommercenode-api.herokuapp.com/api/v1/products"
	);
	const allProducts = await res.json();

	return {
		props: { allProducts: allProducts.products },
	};
}
