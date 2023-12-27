import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Iphone() {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3001/iphones")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data);
				console.log(data);
			})
			.catch(() => console.log("Error"));
	}, []);

	let flip = true;
	return (
		<div>
			<section className="internal-page-wrapper">
				<div className="container">
					<div className="row h-100 align-items-center justify-content-center">
						<div className="col-12 mt-5 pt-5">
							<h1 className="font-weight-bold center ">IPhon Page</h1>
						</div>

						{products?.map((product) => {
							let order1 = 1;
							let order2 = 2;
							if (flip) {
								order1 = 2;
								order2 = 1;

								flip = !flip;
							} else {
								flip = !flip;
							}
							let productDiv = (
								<div
									key={product.product_url}
									className="row justify-content-center text-center product-holder h-100"
								>
									<div className={`col-sm-12 col-md-6 my-outo order-${order1}`}>
										<div className="product-title">{product.product_name}</div>
										<div className="product-brief">
											{product.product_brief_description}
										</div>
										<div className="starting-price">
											{product.product_price}
										</div>
										<div className="monthly-price">{product.price_range}</div>
										<div className="links-wrapper">
											<ul>
												<li>
													<Link to={`iphones/${product.product_name}`}>
														Learn more
													</Link>
												</li>
											</ul>
										</div>
									</div>
									<div className={`col-sm-12 col-md-6 my-outo order-${order2}`}>
										<div className="product-image">
											<img src={product.product_img} alt="product" />
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Iphone;
