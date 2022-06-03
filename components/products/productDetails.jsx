import React from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./productDetails.module.css";

function ProductDetails({ productDetails }) {
	const { name, description, price, size, productImage } = productDetails;
	const cn = classNames.bind(styles);

	const sizes = size[0].split(",");
	console.log(sizes);

	return (
		<>
			<div className={cn("product")}>
				<div className={cn("image_wrapper")}>
					<Image
						src={productImage}
						layout="fill"
						className={cn("image")}
						quality={100}
					/>
				</div>

				<div className={cn("details")}>
					<h3 className={cn("name")}>{name}</h3>
					<h6 className={cn("price")}>₹{price}</h6>
					<p className={cn("description")}>{description}</p>
					<label htmlFor="size" className={cn("size_label")}>
						Size
					</label>
					<div className={cn("size_container")}>
						{sizes.map((size, index) => {
							return (
								<React.Fragment key={index}>
									<label htmlFor={size}>
										<input
											type="radio"
											name="size"
											className={cn("radio")}
											value={size}
											id={size}
										/>
										<span className={cn("size_text")}>{size}</span>
									</label>
								</React.Fragment>
							);
						})}
					</div>

					<button className={cn("add_btn")}>Add to bag</button>
				</div>
			</div>
		</>
	);
}

export default ProductDetails;
