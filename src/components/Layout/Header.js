import { Fragment } from "react"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton"
import { useNavigate } from "react-router-dom"

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

const Header = props => {
	let navigate= useNavigate()
	const routeChange = () => {
		let path = '/'
		navigate(path)
	}

	const element = <FontAwesomeIcon icon={faRobot} />

	return (
		<Fragment>
			<header className={classes.header}>
				<div onClick={routeChange}>
				<h1 >Electro-Shop</h1>
				{element}

				</div>
				<HeaderCartButton showCartHandler={props.showCartHandler}/>
			</header>
		</Fragment>
	)
}

export default Header
