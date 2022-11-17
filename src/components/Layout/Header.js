import { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
import { useNavigate } from "react-router-dom"

const Header = props => {
	let navigate= useNavigate()
	const routeChange = () => {
		let path = '/'
		navigate(path)
	}

	return (
		<Fragment>
			<header className={classes.header}>
				<h1 onClick={routeChange}>Electro-Shop</h1>
				<HeaderCartButton showCartHandler={props.showCartHandler}/>
			</header>
		</Fragment>
	)
}

export default Header
