import '../styles/Shop.css'

function Card({plantData}) {
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
        
        <div className='product-card'>
            <div style={productImageStyle}></div>
            <div className='product-details'>
                <h4>{plantData.product_name}</h4>
                <p>${plantData.product_price}</p>
            </div>
        </div>


    )
}

export default Card