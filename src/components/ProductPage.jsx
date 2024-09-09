import { useParams } from 'react-router-dom'
import { getProductData } from './productData';
import { useState, useEffect } from 'react'

function ProductPage() {
    const { id }  = useParams();
    const productData = getProductData();
    const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        if(productData) {
            setSelectedProduct(productData.find(product => product.product_id == id))
        }
    }, [productData]);
    
    return (

            <div className='product-page'>
                {selectedProduct && 
                    
                    <h3>{selectedProduct.product_name}</h3>
                }
                
            </div>
        

    )
}

export default ProductPage