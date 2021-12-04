import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FinalProduct from '../FinalProduct/FinalProduct';

const ProductDetails = () => {
	const { productId } = useParams();
	const [allProjects, setProjects] = useState([]);
	useEffect(() => {
		fetch('/pojects.json')
			.then(res => res.json())
			.then(data => setProjects(data));
	}, [])

	return (
		<div>

			{
				allProjects.map(product => <FinalProduct
					productId={productId}
					product={product}

				></FinalProduct>)
			}
		</div>
	);
};

export default ProductDetails;