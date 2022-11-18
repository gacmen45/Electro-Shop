import Modal from "../UI/Modal"

const CartModal = (props) => {
return <Modal>
    <button onClick={props.hideCartModalHandler}>X</button>
    <p>test</p>
</Modal>
}

export default CartModal