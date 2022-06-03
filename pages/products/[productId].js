import ProductDetails from "../../components/products/productDetails";

function Product({ productDetails }) {
	return <ProductDetails productDetails={productDetails} />;
}

export default Product;

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`https://ecommercenode-api.herokuapp.com/api/v1/products/${params.productId}`
	);

	const { singleProduct } = await res.json();

	return {
		props: { productDetails: singleProduct },
	};
}
