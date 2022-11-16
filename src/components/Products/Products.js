import ProductItem from "./ProductItem"
import classes from './Products.module.css'

const PRODUCT_LIST = [
	{
		id: 'gow',
		name: 'God of War',
		category: 'games',
		price: 79.99,
	},
	{
		id: 'ps5',
		name: 'PlayStation 5',
		category: 'consoles',
		price: 2599,
	},
	{
		id: 'got',
		name: 'Ghost of Tsushima',
		category: 'games',
		price: 139.99,
	},
	{
		id: 'ps4',
		name: 'PlayStation 4',
		category: 'consoles',
		price: 1299,
	},
]



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
