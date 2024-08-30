import Navbar from './Navbar';
import Footer from './Footer'
import placeholder from '../assets/hero-3.jpg'
import Card from './Card'
import { useState, useEffect } from 'react'
import '../styles/Shop.css'


function Shop() {

    const [plantData, setData] = useState(null)

    function GetData() { 
        useEffect(() => {
          const fetchData = async() => {
            try {
                const response = await fetch(`https://perenual.com/api/species-list?key=sk-NIzP66d10aaa4c2746664&indoor=1&page=10`, {mode: 'cors'});
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error);
            }
          } 
          fetchData();
        }, [])
    }


    GetData();

    return(
        <>
            <Navbar />
            <section className='shop'>
                <div className='shop-nav'>
                    <ul>
                        <li>All Plants</li>
                        <li>Tropical</li>
                        <li>Cacti & Succulents</li>
                        <li>Foliage</li>
                        <li>Pots & Accessories</li>
                    </ul>
                </div>
                <div className='card-container'>
                    {plantData && 
                        plantData.data.map((entry, index) => 
                        <Card 
                        plantData={entry}
                        placeholderIMG={placeholder}
                        key={index}
                        />)  
                    }
                    
                </div>
                
            </section>
            <Footer />
        </>
    )
}

export default Shop