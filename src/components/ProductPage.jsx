import { useParams } from 'react-router-dom'
import { getProductData } from './productData';
import { useState, useEffect } from 'react';
import '../styles/ProductPage.css';
import Navbar from './Navbar';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { useCart } from './CartContext';



function ProductPage() {
    const { id }  = useParams();
    const productData = getProductData();
    const { addToCart } = useCart();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [displayFlyout, setDisplayFlyout] = useState(false);

    useEffect(() => {
        if(productData) {
            setSelectedProduct(productData.find(product => product.product_id == id))
        }
    }, [productData]);

    function handleAddToCart(selectedProduct) {
        addToCart(selectedProduct);
        setDisplayFlyout(true);
    }

    return (
        <>
            <Navbar />
            {selectedProduct && 
                <div className='product-page'>
                    <img src={selectedProduct.product_img_url}></img>
                    <div className='product-information'>
                        <h2>{selectedProduct.product_name}</h2>
                        <p className='price'>${selectedProduct.product_price}</p>
                        <p className='description'>{selectedProduct.product_description}</p>
                        <button className='pink-button' onClick={()=>handleAddToCart(selectedProduct)}>Add to cart</button>
                    </div>
                </div>
            }
            {displayFlyout && 
                <CartSidebar 
                    setDisplayFlyout={setDisplayFlyout}
                />
            }
            
            <Footer />
        </>  
    )
}

export default ProductPage