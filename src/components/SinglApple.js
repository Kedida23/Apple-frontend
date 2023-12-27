import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "./Four04/Four04";

function SinglApple() {
	const [products, setProducts] = useState([]);

	const { pid } = useParams();
	console.log(pid);
	useEffect(() => {
		fetch("http://localhost:3001/iphones")
			.then((res) => res.json())
			.then((data) => {
				const productList = data;
				const SingleApplePro = productList.filter(
					(data) => data.product_name === pid
				);
				setProducts(SingleApplePro);
			})
			.catch(() => console.log("Error you are not able to fetch"));
	}, [pid]);
	if (products.length) {
		return (
			<div>
				<section className="internal-page-wrapper">
					<div className="container">
						{products?.map((data) => {
							return (
								<div key={data.product_id}>
									<div className="row justify-content-center text-center">
										<div className={`col-12 mt-5 pt-5`}>
											<div className="title-wrapper front-weight-bold">
												{data.product_name}
											</div>
											<div className="brief-description">
												{data.product_brief_description}
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		);
	} else {
		return <Four04 />;
	}
}

export default SinglApple;
