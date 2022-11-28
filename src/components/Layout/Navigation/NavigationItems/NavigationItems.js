import { Link } from 'react-router-dom'
import classes from './NavigationItems.module.scss'


import CATEGORY_LIST from '../../../../data/CATEGORY_LIST'

const NavigationItems = props => {
	const changeCategoryHandler = e => {
		props.onChangeCategory(e.currentTarget.dataset.id)
	}


	return (<div>
			<ul className={`${classes.categories}  ${props.mobile ? classes.active : '' }`}>

				{CATEGORY_LIST.map(category => (
					<Link to={'/'} className={classes['categories__item']}>
						<li className={classes['categories__item']} onClick={changeCategoryHandler} key={category} data-id={category} >
							{category}
						</li>
					</Link>
				))}
			</ul>
	
			</div>
	)
}

export default NavigationItems
