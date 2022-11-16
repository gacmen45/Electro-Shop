import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
	return (
		<button className={classes.button} onClick={props.showCartHandler}>
			<span>Cart</span>
			
			<span>7</span>
		</button>
	)
}

export default HeaderCartButton
