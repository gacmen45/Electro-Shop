import { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
	const cartCtx = useContext(CartContext)

const totalAmount = `${cartCtx.totalAmount.toFixed(2)}zł`
const hasItems= cartCtx.items.length >0

const cartItemAddHandler = item =>{
    cartCtx.addItem({...item,amount:1})

}

const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)

}

	const cartItems = (
		<ul>
			{cartCtx.items.map((item) => (
				<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
			))}
		</ul>
	)

	return (
		<Modal hideCartHandler={props.hideCartHandler}>
			{cartItems}
			<div>
				<span>Total Amount: </span>
				<span>{totalAmount}</span>
			</div>
			<div>
				<button onClick={props.hideCartHandler}>Close</button>
				{hasItems && <button>Order</button>}
			</div>
		</Modal>
	)
}

export default Cart
