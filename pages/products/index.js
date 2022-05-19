import ProductList from "../../components/Products/productList";

function Products({ allProducts }) {
	return <ProductList allProducts={allProducts} categories={categories} />;
}

export default Products;

export async function getServerSideProps({ query }) {
	let url = "https://ecommercenode-api.herokuapp.com/api/v1/products";

	if (query.category) {
		url = `https://ecommercenode-api.herokuapp.com/api/v1/products?category=${query.category}`;
	}

	const res = await fetch(url);
	const allProducts = await res.json();

	return {
		props: { allProducts: allProducts.products },
	};
}
