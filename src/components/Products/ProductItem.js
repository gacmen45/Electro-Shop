import { useContext } from 'react'
import classes from './ProductItem.module.css'
import ProductItemActions from './ProductItemActions'
import CartContext from '../../store/cart-context'
import { Link } from 'react-router-dom'

import CartModal from '../Cart/CartModal'

const ProductItem = props => {
	const cartCtx = useContext(CartContext)
	const addToCartHandler = amount => {
		cartCtx.addItem({
			id: props.product.id,
			name: props.product.name,
			amount: amount,
			price: props.product.price,
		}
		)
	}

	return (
		<Link to={`${props.product.id}`}>
			<div className={classes.product}>
				<h2>{props.product.name}</h2>
                <img src={props.product.gallery} width='250px'/>
				<p>{props.product.category}</p>
				<p>{props.product.price}</p>
				<ProductItemActions onAddToCart={addToCartHandler} showCartModalHandler={props.showCartModalHandler} />
			</div>
		</Link>
	)
}

export default ProductItem
