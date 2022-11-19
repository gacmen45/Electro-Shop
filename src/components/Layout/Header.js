import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
import Navigation from "./Navigation/Navigation"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const Header = props => {
	const logo = <FontAwesomeIcon icon={faRobot} />

	let navigate= useNavigate()
	const routeChange = () => {
		let path = '/'
		navigate(path)
	}

	const test = target => {
		props.test2(target)
	}

	return (
		<Fragment>
			<header className={classes.header}>
<Navigation onChangeCategory={test}/>

				<div onClick={routeChange}>
				<h1 >Electro-Shop</h1>
				{logo}

				</div>
				<HeaderCartButton showCartHandler={props.showCartHandler}/>
			</header>
		</Fragment>
	)
}

export default Header
