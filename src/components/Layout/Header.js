import { Fragment } from "react"
import HeaderCartButton from "./HeaderCartButton"
const Header = props => {
	return (
		<Fragment>
			<header>
				<h1>Electro-Shop</h1>
				<HeaderCartButton/>
			</header>
		</Fragment>
	)
}

export default Header
