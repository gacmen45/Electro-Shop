import { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

import { useNavigate } from 'react-router-dom'





const HeaderCartButton = (props) => {

let navigate= useNavigate()
const routeChange = () => {
	let path = 'cart'
	navigate(path)
}


const cartCtx = useContext(CartContext)

const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
	return curNumber + item.amount
},0)

	return (
		<button className={classes.button} onClick={routeChange}>
			<span>Cart</span>
			
			<span>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton
