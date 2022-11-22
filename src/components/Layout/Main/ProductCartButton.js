import classes from './ProductCartButton.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const ProductItemActions = (props) => {
	const cartIcon = <FontAwesomeIcon className={classes['cart-btn__icon']} icon={faCartShopping}/>


	const submitHandler = (event) => {
	  event.preventDefault();
  
	  const enteredAmount = 1;
  
  
	  props.onAddToCart(enteredAmount);
	};

	const onClick = e => {
		submitHandler(e)
		props.showCartModalHandler()
	}

	
	

	return <div onClick={onClick} className={classes['cart-btn']}>{cartIcon}</div>
	
;
}

export default ProductItemActions