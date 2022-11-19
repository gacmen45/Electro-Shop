import classes from './Navigation.module.css'
import CATEGORY_LIST from '../../../data/CATEGORY_LIST'
import { Link } from 'react-router-dom'
const Navigation = (props) => {
    const changeCategoryHandler = e => {
		props.onChangeCategory(e.target.value)
        
	}


	return (
		<nav>
			{CATEGORY_LIST.map(category => (
				<Link to={'/'}>
				<button onClick={changeCategoryHandler} key={category} value={category}>{category}</button></Link>
			))}
		</nav>
	)
}

export default Navigation
