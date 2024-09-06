function Card({plantData}) {
    let url = plantData.product_img_url;
    const myStyle = {
        backgroundImage:
            `url(${url})`,
        width: '100%',
        height: '28vh',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        borderRadius: '4px 4px 0 0', 
        backgroundPosition: '100% 70%'
    };

    return(
        
        <div className='product-card'>
            <div style={myStyle}></div>
            {/* <img src={plantData.product_img_url} width='100%'></img> */}
            <div className='product-details'>
                <h4>{plantData.product_name}</h4>
                <p>$20.00</p>
            </div>
        </div>


    )
}

export default Card