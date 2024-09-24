import { useCart } from './CartContext'
import '../styles/CartSidebar.css'
import closeIcon from '../assets/close.svg'
import QuantityManipulateButton from './QuantityManipulateButton';

function CartSidebar({ setDisplayFlyout }) {
    const { cartContents, cartQuantity, cartTotals } = useCart();
    const totals = cartTotals()

    return(
        <div className='cart-flyout'>

            <button onClick={()=>setDisplayFlyout(false)} className='close-flyout'>
                <img src={closeIcon} width='22px'></img>
            </button>

            <div>
                <h2 className='flyout-header'>Your Cart ({cartQuantity})</h2>
                <p className='subhead'> Packaged with love.</p>
            </div>
            
            <div className='flyout-cart-items'>
                {cartContents.map((item, index) => (
                <div key={index} className='flyout-item'>
                    <img src={item.product_img_url}></img>
                    <div>
                        <p>{item.product_name}</p>
                        <p>{item.product_price}</p>
                        <QuantityManipulateButton 
                            quantity={item.quantity}
                            item={item}
                        />
                    </div>
                </div>
                ))}
            </div>

            <div className='flyout-totals'>
                <div className='total-group'>         
                    <p>Tax:</p>
                    <p>{totals.tax}</p>
                </div>
                <div className='total-group'>         
                    <p className='bold'>Total:</p>
                    <p className='bold'>{totals.grandTotal}</p>
                </div>
       

            </div>

            <button className='pink-button' id='flyout-checkout'>Checkout</button>
    
        </div>
    )
}

export default CartSidebar