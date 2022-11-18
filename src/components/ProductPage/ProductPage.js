import PRODUCT_LIST from './../../data/PRODUCT_LIST'
import { useParams } from "react-router-dom"


const ProductPage = (props) => {
    const { id } = useParams()
    const product = PRODUCT_LIST.find(product => product.id === id)

    return <div>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <button onClick={props.showCartModalHandler}>ADD TO CART</button>
    </div>
}

export default ProductPage