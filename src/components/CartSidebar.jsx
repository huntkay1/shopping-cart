import { useCart } from './CartContext'
import '../styles/CartSidebar.css'
import closeIcon from '../assets/close.svg'

function CartSidebar({ setDisplayFlyout }) {
    const { cartContents } = useCart();

    return(
        <div className='cart-flyout'>

            <button onClick={()=>setDisplayFlyout(false)} className='close-flyout'>
                <img src={closeIcon} width='22px'></img>
            </button>
            
            <div className='flyout-cart-items'>
                {cartContents.map((item, index) => (
                <div key={index} className='flyout-item'>
                    <img src={item.product_img_url}></img>
                    <div>
                        <p>{item.product_name}</p>
                        <p>{item.product_price}</p>
                    </div>
                    
                </div>
                ))}
            </div>
    
        </div>
    )
}

export default CartSidebar