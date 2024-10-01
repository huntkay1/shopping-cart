import shoppingCart from '../assets/cart-icon.svg';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';
import { useState } from 'react';
import HamburgerMenuIcon from '../assets/hamburger-menu.svg';

function Navbar() {
    const { cartQuantity } = useCart();

    const setActive = ({ isActive }) => (isActive ? 'active-link' : '');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='navbar'>
            <button className='menu' onClick={() => { setMenuOpen(!menuOpen) }}>
                <img src={HamburgerMenuIcon} width='35px'></img>
            </button>
            <ul className={menuOpen ? 'open' : ''}>
                <li >
                    <NavLink to='/' className={setActive}>Home</NavLink>
                </li>
                <li >
                    <NavLink to='/shop' className={setActive}>Shop</NavLink>
                </li>
                <li >
                    <NavLink to='/about' className={setActive}>About</NavLink>
                </li>
            </ul>



            <NavLink to='/' className='logo'>
                <h1>Leafy Greens</h1>
            </NavLink>

            <div className='cart'>
                <NavLink to='/cart'>
                    <img src={shoppingCart} className='cart-icon' alt='Cart' />
                    <span id='cart-badge' className={cartQuantity > 0 ? 'active' : ''}>{cartQuantity}</span>
                </NavLink>
            </div>



        </nav>
    );
}

export default Navbar;


