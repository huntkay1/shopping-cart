import Navbar from './Navbar'
import Footer from './Footer'
import QuantityManipulateButton from './QuantityManipulateButton'
import { useCart } from './CartContext'
import removeIcon from '../assets/trash.svg'
import '../styles/Cart.css'

function Cart() {
    const { cartContents, removeItemFromCart, cartQuantity, cartTotals } = useCart();

    return(
        <>
            <Navbar />
            <section className='shopping-cart-page'>
                <h2 className='cart-header'>
                Your Cart - {cartQuantity} {cartQuantity === 1 ? 'Item' : 'Items'}
                </h2>
                <section className='shopping-cart'>
                    <div className='table-header'>
                        <h3>Item</h3>
                        <span></span>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </div>

                    {cartContents.length > 0 ? (
                        <div className='cart-items'>
                            {cartContents.map((item, index) => (
                                <div key={index} className='cart-item'>
                                    <img src={item.product_img_url} alt={item.product_name} className='cart-item-img' />
                                    <p className='cart-product-name'>{item.product_name}</p>
                                    <p className='cart-item-price'> ${item.product_price}</p>
                                    <QuantityManipulateButton 
                                        quantity={item.quantity}
                                        item={item}
                                    />
                                    <p className='cart-item-total'>${(item.product_price * item.quantity).toFixed(2)}</p>
                                    <button className='remove-item' onClick={()=>removeItemFromCart(item)}><img src={removeIcon} width='22px'></img></button>
                                </div>
                            ))}
                        </div>
                        
                    ) : (
                        <p className='empty-cart'>Your cart is empty.</p>
                    )}
                </section>

                <div className='checkout-totals'>
                    <div className='cart-total-section border'>
                        <h4 className='cart-total-header'>Subtotal</h4>
                        <p>${cartTotals.subtotal}</p>
                    </div>
                    <div className='cart-total-section border'>
                        <h4 className='cart-total-header'>Tax</h4>
                        <p>${cartTotals.tax}</p>
                    </div>
                    <div className='cart-total-section'>
                        <h4 className='cart-total-header'>Total</h4>
                        <p className='grand-total'> ${cartTotals.grandTotal}</p>
                    </div>

                    <button className='green-button checkout-button'>Checkout</button>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Cart