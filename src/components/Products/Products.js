import ProductItem from "./ProductItem"
import classes from './Products.module.css'
import PRODUCT_LIST from '../../data/PRODUCT_LIST'






const Products = () => {
	const productList = PRODUCT_LIST.map(product => 
		 <ProductItem product={product} key={product.id}/>
	)

	return (
		<section>
			<div className={classes.container}>{productList}</div>
		</section>
	)
}
export default Products
