import React from 'react';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

import flechita from "@icons/icon_close.png"; 

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={flechita} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;