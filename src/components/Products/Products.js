import PRODUCT_LIST from '../../data/PRODUCT_LIST'
import classes from './Products.module.css'
import ProductItem from "./ProductItem"






const Products = () => {
	const productList = PRODUCT_LIST.map(product => 
		 <ProductItem product={product} key={product.id} id={product.id}/>
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
