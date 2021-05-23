import classes from './Cart.module.css'
import Modal from '../UI/Model'
const Cart=(props)=>{
const cartItems=<ul className={classes['cart-items']}>{[{id:'c1', name:'succi', amount:2, price:12.34}].map(item=><li>{item.name}</li>)}</ul>
return <Modal onClose={props.onClose}>
{cartItems}
<div className={classes.total}>
<span>Total Amount</span>
<span>36.5</span>
</div>
<div className={classes.actions}>
<button className={classes['button--alt'] } onClick={props.onClose}>Close</button>
<button className={classes.button}>Order</button>
</div>
</Modal>
}
export default Cart;