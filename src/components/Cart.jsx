import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Cart.css'
import { useCart } from './CartContext'

function Cart() {
    const { cartContents } = useCart();
    const cartWithQuantity = calculateQuantity();

    function calculateQuantity() {
        const quantityMap = {};
        cartContents.forEach(item => {
            if (!quantityMap[item.product_id]) {
                quantityMap[item.product_id] = {...item, quantity: 1};
            } else {
                quantityMap[item.product_id].quantity++;
            }
        })

        return quantityMap
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

                    {Object.keys(cartWithQuantity).length > 0 ? (
                    <div className='cart-items'>
                        {/* Convert the object to an array and map over it */}
                        {Object.values(cartWithQuantity).map((item, index) => (
                            <div key={index} className='cart-item'>
                                <div className='cart-item-title'>
                                    <img src={item.product_img_url} alt={item.product_name} className='cart-item-img' />
                                    <h3>{item.product_name}</h3>
                                </div>
                                <p className='cart-item-price'> ${item.product_price}</p>
                                <p className='cart-item-quantity'>{item.quantity}</p>
                                <p className='cart-item-total'>${(item.product_price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}


                </section>

            </section>

            <Footer />
        </>
    )
}

export default Cart