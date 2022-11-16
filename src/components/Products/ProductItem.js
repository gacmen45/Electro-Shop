import classes from './ProductItem.module.css'

const ProductItem = props => {
return <div className={classes.product}>
    <h2>{props.product.name}</h2>
    <p>{props.product.category}</p>
    <p>{props.product.price}</p>
</div>
}

export default ProductItem