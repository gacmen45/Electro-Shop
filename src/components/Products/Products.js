import { useState } from 'react'
import PRODUCT_LIST from '../../data/PRODUCT_LIST'
import classes from './Products.module.css'
import ProductItem from "./ProductItem"

import { Link } from 'react-router-dom'




const Products = (props) => {


	const test =() => {
		const newCategory = props.changeCategory
	}

	const filteredProducts = PRODUCT_LIST.filter(product => {
		if (props.changeCategory === 'all') {
			return product
		}

		return product.category === props.changeCategory
	})

	

	
	const productListFiltered = filteredProducts.map(product => <ProductItem  product={product} key={product.id} id={product.id} showCartModalHandler={props.showCartModalHandler} changeCategory={test}/>)
	



	return (
		<section>
			
			<div className={classes.container}>
				{productListFiltered}
				</div>
		</section>
	)
}
export default Products
