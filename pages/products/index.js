import ProductList from "../../components/products/productList";

function Products({ allProducts }) {
	return <ProductList allProducts={allProducts} />;
}

export default Products;

export async function getServerSideProps({ resolvedUrl }) {
	const url = `https://ecommercenode-api.herokuapp.com/api/v1${resolvedUrl}`;

	const res = await fetch(url);
	const allProducts = await res.json();

	return {
		props: { allProducts: allProducts.products },
	};
}
