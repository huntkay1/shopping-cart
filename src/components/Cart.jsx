import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Cart.css'
import { useCart } from './CartContext'
import removeIcon from '../assets/trash.svg'

function Cart() {
    const { cartContents } = useCart();
    const cartWithQuantity = calculateQuantity();
    const cartSubtotal = calculateTotal();
    const cartTax = (cartSubtotal * 0.06).toFixed(2)
    const cartGrandTotal = (+cartSubtotal + +cartTax).toFixed(2)

    function calculateQuantity() {
        const quantityMap = [];
        cartContents.forEach(item => {
            if (!quantityMap[item.product_id]) {
                quantityMap[item.product_id] = {...item, quantity: 1};
            } else {
                quantityMap[item.product_id].quantity++;
            }
        })

        return quantityMap
    }

    function calculateTotal() {
        const total = cartWithQuantity.reduce((total, item) => total + (item.product_price*item.quantity), 0)
        return total.toFixed(2)
    }

    return(
        <>
            <Navbar />
            <section className='shopping-cart'>
                <h2 className='cart-header'>
                Your Cart - {cartContents.length} {cartContents.length === 1 ? 'Item' : 'Items'}
                </h2>
                <section>
                    <div className='table-header'>
                        <h3>Item</h3>
                        <h3>Price</h3>
                        <h3>Quantity</h3>
                        <h3>Total</h3>
                    </div>

                    {cartWithQuantity.length > 0 ? (
                    <div className='cart-items'>
                        {cartWithQuantity.map((item, index) => (
                            <div key={index} className='cart-item'>
                                <div className='cart-item-title'>
                                    <img src={item.product_img_url} alt={item.product_name} className='cart-item-img' />
                                    <h3>{item.product_name}</h3>
                                </div>
                                <p className='cart-item-price'> ${item.product_price}</p>
                                <p className='cart-item-quantity'>{item.quantity}</p>
                                <p className='cart-item-total'>${(item.product_price * item.quantity).toFixed(2)}</p>
                                <button className='remove-icon'><img src={removeIcon} width='22px'></img></button>
                                
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                </section>

                <div className='checkout-totals'>
                    <div className='cart-total-section border'>
                        <h4 className='cart-total-header'>Subtotal</h4>
                        <p>${cartSubtotal}</p>
                    </div>
                    <div className='cart-total-section border'>
                        <h4 className='cart-total-header'>Tax</h4>
                        <p>${cartTax}</p>
                    </div>
                    <div className='cart-total-section'>
                        <h4 className='cart-total-header'>Total</h4>
                        <p className='grand-total'> ${cartGrandTotal}</p>
                    </div>

                    <button className='pink-button'>Checkout</button>
                </div>

            </section>

            <Footer />
        </>
    )
}

export default Cart