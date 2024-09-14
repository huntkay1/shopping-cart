import shoppingCart from '../assets/cart-icon.svg'
import '../styles/nav.css'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <section className='navbar'>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul> 
            </nav>
            <div className='logo'>  <h1>Leafy Greens</h1></div>
            
            <div className='cart'><Link to='/cart'><img src={shoppingCart} className='cart-icon'></img></Link></div>
        </section>
    )
}

export default Navbar