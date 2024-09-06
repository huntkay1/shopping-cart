import Navbar from './Navbar';
import Footer from './Footer'
import Card from './Card'
import { useState, useEffect } from 'react'
import '../styles/Shop.css'


function Shop() {

    const [plantData, setData] = useState(null)

    function GetData() { 
        useEffect(() => {
          const fetchData = async() => {
            try {
                const response = await fetch(`http://localhost:3000/products`, {mode: 'cors'});
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
                        plantData.map((entry, index) => 
                        <Card 
                        plantData={entry}
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