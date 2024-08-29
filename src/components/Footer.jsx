import '../styles/Footer.css'

function Footer() {
    return(
        <footer>
            <div className='list-block'>
                <h3>Products</h3>
                <ul className='footer-list'>
                    <li>Tropical Plants</li>
                    <li>Cacti & Succulents</li>
                    <li>Foliage</li>
                    <li>Pots & Accessories</li>
                </ul>
            </div>
            <div className='list-block'>
                <h3>Other Pages</h3>
                <ul className='footer-list'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                    <li>Shipping Policy</li>
                    <li>Return Policy</li>
                </ul>
            </div>
            <div className='list-block'>
                <h3>Socials</h3>
                <ul className='footer-list'>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>X</li>
                    <li>TikTok</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer