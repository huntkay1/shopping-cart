import { useCart } from './CartContext'
import '../styles/CartSidebar.css'

function CartSidebar({ setDisplayFlyout }) {
    const { cartContents } = useCart();

    return(
        <div className='cart-flyout'>

            <button onClick={()=>setDisplayFlyout(false)}>X</button>
             
            {cartContents.map((item, index) => (
            <div key={index}>
                <div>
                    <p className='item'>{item.product_name}</p>
                </div>
            </div>
            ))}
    
        </div>
    )
}

export default CartSidebar