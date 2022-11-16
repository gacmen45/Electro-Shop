import classes from './ProductItem.module.css'
import ProductItemActions from './ProductItemActions'

const ProductItem = props => {
return <div className={classes.product}>
    <h2>{props.product.name}</h2>
    <p>{props.product.category}</p>
    <p>{props.product.price}</p>
    <ProductItemActions/>
</div>
}

export default ProductItem