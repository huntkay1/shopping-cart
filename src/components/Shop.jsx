import Navbar from './Navbar';
import Footer from './Footer'
import placeholder from '../assets/hero-3.jpg'
import '../styles/Shop.css'

function Shop() {
    return(
        <>
            <Navbar />
            <section className='shop'>
                <div className='shop-nav'>
                    <ul>
                        <li>Tropical Plants</li>
                        <li>Cacti & Succulents</li>
                        <li>Foliage</li>
                        <li>Pots & Accessories</li>
                    </ul>
                </div>
                <div className='card-container'>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                    <div className='product-card'>
                        <img src={placeholder} width='100%'></img>
                        <div className='product-details'>
                            <h4>Plant Name</h4>
                            <p>$20.00</p>
                        </div>
                    </div>
                </div>
                
            </section>
            <Footer />
        </>
    )
}

export default Shop