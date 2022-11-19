import classes from './CartModal.module.css'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartModalForm from './CartModalForm'

const CartModal = props => {
	const cartCtx = useContext(CartContext)

	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItemRemoveHandler = id => {
		if (cartCtx.currentItem.amount === 1) {
			return
		} else {
			cartCtx.removeItem(id)
		}
	}

	return (
		<Modal hideCartModalHandler={props.hideCartModalHandler}>
			<div className={classes['cart-module']}>
				<p>ADD PRODUCT TO CART</p>

				<div>
					<p>{cartCtx.currentItem.name}</p>
					<p>{cartCtx.currentItem.price * cartCtx.currentItem.amount}</p>
					<p>{cartCtx.currentItem.amount}</p>
					<CartModalForm
						onRemove={cartItemRemoveHandler.bind(null, cartCtx.currentItem.id)}
						onAdd={cartItemAddHandler.bind(null, cartCtx.currentItem)}
						hideCartModalHandler={props.hideCartModalHandler}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default CartModal
