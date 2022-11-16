import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart =(props) => {
const cartItems = <ul>{[ {id:'gow',name:'God of War', amount:1, price:79.99}].map((item) => <li>{item.name}</li>)}</ul>

    return <Modal hideCartHandler={props.hideCartHandler}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>99.99</span>
        </div>
        <div>
            <button onClick={props.hideCartHandler}>Close</button>
            <button>Order</button>
        </div>
    </Modal>
}


export default Cart