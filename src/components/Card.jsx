/* eslint-disable react/prop-types */
import '../styles/Shop.css'
import { Link } from 'react-router-dom'

function Card({ plantData }) {

    const IMGUrl = plantData.product_img_url;
    const productImageStyle = {
        backgroundImage: `url(${IMGUrl})`,
        width: '100%',
        height: '30vh',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: '4px 4px 0 0', 
        backgroundPosition: '100% 70%'
    };

    return(
        <Link to={'/details/' + plantData.product_id}>
            <div className='product-card' >
                <div style={productImageStyle}></div>
                <div className='product-details'>
                    <h4>{plantData.product_name}</h4>
                    <p>${plantData.product_price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card