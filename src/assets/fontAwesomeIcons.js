import classesCartBtn from './../components/Layout/Navigation/CartButton/CartButton.module.scss'
import classesSearchBtn from './../components/Layout/Navigation/SearchBar/SearchBar.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faRobot } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const logo = <FontAwesomeIcon icon={faRobot} style={{ color: 'black' }} size='2x' />
const cartIcon = <FontAwesomeIcon className={classesCartBtn['cart-btn__icon']}  icon={faCartShopping}/>
const searchIcon = <FontAwesomeIcon className={classesSearchBtn['search-btn__icon']} icon={faMagnifyingGlass} />



export {logo,cartIcon,searchIcon}
