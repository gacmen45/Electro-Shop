import classes from './CartItem.module.scss'
import { Link } from 'react-router-dom'

const CartItem = props => {
	const newPrice = props.item.price * props.item.amount
	return (
		<li className={classes['cart-item']}>
			<div className={classes['cart-item__box']}>
				<img className={classes['cart-item__box-img']} src={props.item.photo} alt='' />
				<div className={classes['cart-item__box-txt']}>
					<h2>{props.item.name}</h2>
				</div>
			</div>
			<div className={classes['cart-item__summary']}>
				<p className={classes['cart-item__summary-price']}>{newPrice}zł</p>
				<div className={classes['cart-item__summary__btns']}>
					<button className={classes['cart-item__summary__btns-btn']} onClick={props.onRemove}>
						−
					</button>
					<p className={classes['cart-item__summary__btns-amount']}>{props.item.amount}</p>
					<button className={classes['cart-item__summary__btns-btn']} onClick={props.onAdd}>
						+
					</button>
				</div>
			</div>
		</li>
	)
}

export default CartItem
