import { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Electro-Shop</h1>
				<HeaderCartButton/>
			</header>
		</Fragment>
	)
}

export default Header
