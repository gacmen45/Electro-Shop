import { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

import classes from './Navigation.module.scss'

import NavigationItems from './NavigationItems/NavigationItems'
import CartButton from './CartButton/CartButton'


import { Squash as Hamburger } from 'hamburger-react'


const Navigation = props => {
	const logo = <FontAwesomeIcon icon={faRobot} style={{ color: 'black' }} size='2x' />

	const [matches, setMatches] = useState(window.matchMedia('(min-width: 992px)').matches)

	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatches(e.matches))
	}, [])

	let navigate = useNavigate()
	const routeChange = () => {
		let path = '/'
		navigate(path)
	}

	//ZLOKALIZOWAĆ CO NAZWAŁEM TEST2
	const changeCategory = target => {
		props.test2(target)
	}

	
	const [isOpen, setOpen] = useState(false)

	return (
		<Fragment>
			<nav className={classes.nav}>
				<NavigationItems onChangeCategory={changeCategory} mobile={isOpen}/>

				<div onClick={routeChange} className={classes['nav__logo']}>
					<h1>Electro-Shop</h1>
					{logo}
				</div>
				<div className={classes['nav__btn-box']}>
					<CartButton showCartHandler={props.showCartHandler} />
					{!matches && <Hamburger toggled={isOpen} toggle={setOpen}  ></Hamburger>}
				</div>
			</nav>
		</Fragment>
	)
}

export default Navigation
