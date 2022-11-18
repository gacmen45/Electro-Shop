import classes from './CartModal.module.css'
import Modal from '../UI/Modal'
import { useContext, useRef, useState } from 'react'
import CartContext from '../../store/cart-context'
import ProductItemActions from '../Products/ProductItemActions'
import ProductItem from '../Products/ProductItem'
import { useParams } from 'react-router-dom'
import CartItem from './CartItem'
import CartModalForm from './CartModalForm'

const CartModal = props => {
	const cartCtx = useContext(CartContext)

	const lastItem = cartCtx.items.slice(-1)

	//TEST
	const cartItemAddHandler = item => {
		cartCtx.addItem({ ...item, amount: 1 })
	}

	const cartItemRemoveHandler = id => {
		const lastItemAmount = lastItem.map(item => item.amount)
		const lastItemAmountNumber = +lastItemAmount
		if (lastItemAmountNumber === 1) {
			return
		}
		cartCtx.removeItem(id)
	}


	return (
		<Modal hideCartModalHandler={props.hideCartModalHandler}>
			<div className={classes['cart-module']}>
				<button onClick={props.hideCartModalHandler}>X</button>

				<p>ADD PRODUCT TO CART</p>
				<div>
					{lastItem.map(item => (
						<div>
							{item.name}
							<br />
							{item.price * item.amount}
							<br />
							{item.amount}
							<br />
							<br />
							<CartModalForm
								onRemove={cartItemRemoveHandler.bind(null, item.id)}
								onAdd={cartItemAddHandler.bind(null, item)}
								hideCartModalHandler={props.hideCartModalHandler}
							/>
						</div>
					))}
				</div>

				{/* <CartModalForm/> */}
			</div>
		</Modal>
	)
}

export default CartModal
