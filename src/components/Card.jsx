/* eslint-disable react/prop-types */
import '../styles/Shop.css'
import { Link } from 'react-router-dom'

function Card({ plantData }) {

    const IMGUrl = plantData.product_img_url;
    const productImageStyle = {
        backgroundImage: `url(${IMGUrl})`,
        width: '100%',
        height: '300px',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: '5px', 
        backgroundPosition: '100% 50%',
    };

    return(
        <Link to={'/details/' + plantData.id}>
            <div className='product-card' >
                <div className='card-image'style={productImageStyle}></div>
                <div className='product-details'>
                    <h4>{plantData.product_name}</h4>
                    <p>${plantData.product_price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card