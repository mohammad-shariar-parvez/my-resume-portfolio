import React from 'react';

const FinalProduct = (props) => {
	const { id, name, img1, img2, img3, intro1, intro2, intro3, techno, live, client, server } = props.product;
	return (
		<div>
			{
				id == props.productId &&
				<div>
					<h2 >{name}</h2>

					<div class="row row-cols-1 row-cols-md-3 g-4 my-3">
						<div class="col">
							<div class="card h-100">
								<img src={img1} class="card-img-top" alt="..." />
							</div>
						</div>
						<div class="col">
							<div class="card h-100">
								<img src={img2} class="card-img-top" alt="..." />
							</div>
						</div>
						<div class="col">
							<div class="card h-100">
								<img src={img3} class="card-img-top" alt="..." />
							</div>
						</div>
					</div>

					<div className="d-flex justify-content-evenly">
						<a className="link-className text-decoration-none fw-bold" href={live}>Live Site</a>
						<a className="link-className text-decoration-none fw-bold" href={client}>Client-Side</a>
						{
							server &&
							<a className="link-className text-decoration-none fw-bold" href={server}>Server-Side</a>
						}
					</div>

					<div class="row row-cols-1  g-4 mb-5">
						<div class="col">
							<div class="card h-100">
								<div class="card-body text-start">
									<h3 class="card-title">OverView</h3>


									<small class="card-text">{intro1}</small>
									<br></br>
									<small class="card-text">{intro2}</small>
									<br></br>
									<small class="card-text">{intro3}</small>
									<br></br>
									<br></br>
									<div>
										<h6 className="fw-bold" >Used Technology and Language</h6>
										<small class="card-text">{techno}</small>
									</div>
								</div>
							</div>
						</div>



					</div>
				</div>
			}
		</div >
	);
};

export default FinalProduct;