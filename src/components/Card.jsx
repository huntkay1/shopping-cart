function Card({plantData, placeholderIMG}) {

    return(
        
        <div className='product-card'>
            <img src={placeholderIMG} width='100%'></img>
            <div className='product-details'>
                <h4>{plantData.common_name}</h4>
                <p>$20.00</p>
            </div>
        </div>


    )
}

export default Card