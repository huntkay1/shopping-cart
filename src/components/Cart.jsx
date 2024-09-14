import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/Cart.css'

function Cart() {
    return(
        <>
            <Navbar />
            <div className='shopping-cart'>
                <h2 className='cart-header'>Your Cart - 3 items</h2>
            </div>
            <Footer />
        </>
    )
}

export default Cart