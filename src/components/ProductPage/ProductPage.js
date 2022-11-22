import { useContext } from 'react'

import PRODUCT_LIST from './../../data/PRODUCT_LIST'
import { useParams } from "react-router-dom"
import CartContext from '../../store/cart-context'
import ProductItemActions from '../Layout/Main/ProductCartButton'
import classes from './ProductPage.module.css'


const ProductPage = (props) => {
    const { id } = useParams()
    const product = PRODUCT_LIST.find(product => product.id === id)

    const cartCtx =useContext(CartContext) 
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:product.id,
            name:product.name,
            amount:amount,
            price:product.price,
            photo:product.description
    
        })
    }



    return <div className={classes.test}>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>test</p>
        <img src={product.gallery[0]} alt="" />
        <ProductItemActions onAddToCart={addToCartHandler} showCartModalHandler={props.showCartModalHandler}/>

    </div>
}

export default ProductPage