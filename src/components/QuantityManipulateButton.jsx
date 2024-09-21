import { useCart } from './CartContext'
import '../styles/Cart.css'


function QuantityManipulateButton({ quantity, item }) {
    const { changeProductQuantity } = useCart();
    return(
        <div className='cart-item-quantity'>
            <button className='quantity-button' onClick={()=>changeProductQuantity(item, 'decrease')}>-</button>
            <p>{quantity}</p>
            <button className='quantity-button' onClick={()=>changeProductQuantity(item, 'increase')}>+</button>
        </div>
    )
}

export default QuantityManipulateButton