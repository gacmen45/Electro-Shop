import { useContext } from 'react'

import PRODUCT_LIST from './../../data/PRODUCT_LIST'
import { useParams } from "react-router-dom"
import CartContext from '../../store/cart-context'
import ProductItemActions from '../Products/ProductItemActions'


const ProductPage = (props) => {
    const { id } = useParams()
    const product = PRODUCT_LIST.find(product => product.id === id)

    const cartCtx =useContext(CartContext) 
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:product.id,
            name:product.name,
            amount:amount,
            price:product.price
    
        })
    }



    return <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <button onClick={props.showCartModalHandler}>ADD TO CART</button>
        <ProductItemActions onAddToCart={addToCartHandler} showCartModalHandler={props.showCartModalHandler}/>

    </div>
}

export default ProductPage