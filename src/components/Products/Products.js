import { useState } from 'react'
import PRODUCT_LIST from '../../data/PRODUCT_LIST'
import classes from './Products.module.css'
import ProductItem from "./ProductItem"

import { Link } from 'react-router-dom'




const Products = (props) => {

	const test = (e) => {
		console.log(e.target);
	}

	const productList = PRODUCT_LIST.map(product => 
		 <ProductItem  product={product} key={product.id} id={product.id} showCartModalHandler={props.showCartModalHandler}/>
	)
	



	return (
		<section>
			
			<div className={classes.container}>
				{productList}
				</div>
		</section>
	)
}
export default Products
