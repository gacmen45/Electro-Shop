import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Input from '../UI/Input'

const CartModalForm = props => {
	return (
		<div>

			<button onClick={props.onRemove}>−</button>
			<button onClick={props.onAdd}>+</button>


			<button onClick={props.hideCartModalHandler}>DODAJ DO KOSZYKA I WRÓĆ DO STRONY GŁÓWNEJ</button>
			<Link to='cart'>
				<button onClick={props.hideCartModalHandler}>DODAJ DO KOSZYKA I IDŹ DO KOSZYKA</button>
			</Link>
		</div>
	)
}

export default CartModalForm
