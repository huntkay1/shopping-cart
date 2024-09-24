import shoppingCart from '../assets/cart-icon.svg'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'

function Navbar() {

    const { cartQuantity } = useCart();

    const setActive = ({ isActive }) => isActive ? "active-link" : "";


    return (
        <section className='navbar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={setActive}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/shop' className={setActive}>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={setActive}>About</NavLink>
                    </li>
                </ul> 
            </nav>
            <NavLink to='/'>
                <div className='logo'> 
                    <h1>Leafy Greens</h1>
                </div>
            </NavLink>
            
            <div className='cart'>
                <NavLink to='/cart'>
                    <img src={shoppingCart} className='cart-icon'></img>
                    <span id='cart-badge' className={cartQuantity > 0 ? 'active' : ''}>{cartQuantity}</span>
                </NavLink></div>
        </section>
    )
}

export default Navbar