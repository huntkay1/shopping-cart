import shoppingCart from '../assets/cart-icon.svg'
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import { useCart } from './CartContext'

function Navbar() {

    const { cartQuantity } = useCart();

    const setActive = ({ isActive }) => isActive ? "active-link" : "";


    return (
<nav className='navbar navbar-expand-md' id='nav-align'>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"  aria-controls='navbarTogglerDemo02'>
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav justify-content-center">
            <li className='nav-item'>
                <NavLink to='/' className={setActive}>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/shop' className={setActive}>Shop</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/about' className={setActive}>About</NavLink>
            </li>
        </ul> 
    </div>

    <NavLink to='/' className='logo navbar-brand'>
        <div> 
            <h1>Leafy Greens</h1>
        </div>
    </NavLink>

    <div className='cart'>
        <NavLink to='/cart'>
            <img src={shoppingCart} className='cart-icon'></img>
            <span id='cart-badge' className={cartQuantity > 0 ? 'active' : ''}>{cartQuantity}</span>
        </NavLink>
    </div>
</nav>

    )
}

export default Navbar