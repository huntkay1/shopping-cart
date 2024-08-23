import shoppingCart from './assets/cart-icon.svg'
import './styles/nav.css'

function Nav() {

    return (
        <nav>
            <div className='nav-button-container'>
                <button>Shop</button>
                <button>About</button>
            </div>
            <h1>Leafy Greens</h1>
            <img src={shoppingCart} className='cart-icon'></img>
        </nav>
    )
}

export default Nav