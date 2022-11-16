import { useContext } from 'react'
import classes from './ProductItem.module.css'
import ProductItemActions from './ProductItemActions'
import CartContext from '../../store/cart-context'

const ProductItem = props => {
const cartCtx =useContext(CartContext) 
const addToCartHandler = amount => {
    cartCtx.addItem({
        id:props.product.id,
        name:props.product.name,
        amount:amount,
        price:props.product.price

    })
}


return <div className={classes.product}>
    <h2>{props.product.name}</h2>
    <p>{props.product.category}</p>
    <p>{props.product.price}</p>
    <ProductItemActions onAddToCart={addToCartHandler}/>
</div>
}

export default ProductItem