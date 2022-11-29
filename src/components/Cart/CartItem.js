import classes from './CartItem.module.scss'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const CartItem = props => {
	const trashIcon = <FontAwesomeIcon className={classes['cart-btn__icon']} icon={faTrash}/>

	const newPrice = (props.item.price * props.item.amount).toFixed(2)
	return (
		<li className={classes['cart-item']}>
			<Link to={`/${props.item.id}`} style={{ textDecoration: 'none', color: 'black' }}>
				<div className={classes['cart-item__box']}>
					<img className={classes['cart-item__box-img']} src={props.item.photo} alt='' />
					<div className={classes['cart-item__box-txt']}>
						<h2>{props.item.name}</h2>
					</div>
				</div>
			</Link>
			<div className={classes['cart-item__summary']}>
				<p className={classes['cart-item__summary-price']}>{newPrice}zł</p>
				<div className={classes['cart-item__summary__btns']}>
					<button className={`${classes['cart-item__summary__btns-btn']} ${classes['cart-item__summary__btns-btn--trash']}`} onClick={props.onDelete}>{trashIcon}</button>
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
