import classes from './ProductItemActions.module.css'

const ProductItemActions = (props) => {
   


	const submitHandler = (event) => {
	  event.preventDefault();
  
	  const enteredAmount = 1;
  
  
	  props.onAddToCart(enteredAmount);
	};

	const onClick = e => {
		submitHandler(e)
		props.showCartModalHandler()
	}

	
	

	return (<div>
	 		<button onClick={onClick}>+ Add</button>
	  </div>
	);
}

export default ProductItemActions