import { Fragment, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'

import classes from './Navigation.module.scss'

import NavigationItems from './NavigationItems/NavigationItems'
import CartButton from './CartButton/CartButton'
import SearchBar from './SearchBar/SearchBar'

import Wrapper from '../../UI/Wrapper'

import { Squash as Hamburger } from 'hamburger-react'

const Navigation = props => {
	const logo = <FontAwesomeIcon icon={faRobot} style={{ color: 'black' }} size='2x' />

	const [matchesLG, setMatchesLG] = useState(window.matchMedia('(min-width: 992px)').matches)
	const [matchesMD, setMatchesMD] = useState(window.matchMedia('(min-width: 576px)').matches)


	useEffect(() => {
		window.matchMedia('(min-width: 992px)').addEventListener('change', e => setMatchesLG(e.matches))
	}, [])
	useEffect(() => {
		window.matchMedia('(min-width: 576px)').addEventListener('change', e => setMatchesMD(e.matches))
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
		<Wrapper>
			<nav className={classes.nav}>
				<div className={classes.test}>
					<div onClick={routeChange} className={classes['nav__logo']}>
						<h1>GameShop</h1>
						{logo}
					</div>

					<NavigationItems onChangeCategory={changeCategory} mobile={isOpen} closeNav={setOpen}  />
				</div>
				<div className={classes['nav__btn-box']}>
					{matchesMD &&<SearchBar/>}
					<CartButton showCartHandler={props.showCartHandler} />
					{!matchesLG && <Hamburger toggled={isOpen} toggle={setOpen}></Hamburger>}

				</div>
				{!matchesMD &&<div className={classes.aaa}><SearchBar/></div>}
			</nav>
		</Wrapper>
	)
}

export default Navigation
