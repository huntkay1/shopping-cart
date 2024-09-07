import Navbar from './Navbar';
import Footer from './Footer'
import Card from './Card'
import { useState, useEffect } from 'react'
import '../styles/Shop.css'


function Shop() {

    const [plantData, setData] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const [activeButton, setActiveButton] = useState('All Plants')

    window.addEventListener('load', GetData());

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

    useEffect(() => {
        if(plantData) {
          filterData('All Plants')
        }
    }, [plantData]);

    function filterData(filterType) {
        setActiveButton(filterType);

        if (filterType == 'Accessories' || filterType == 'All Plants' ) {
            const result = plantData.filter((product) => filterType.includes(product.product_type) );
            setFilteredData(result);
        } else {
            const result = plantData.filter((product) => filterType.includes(product.plant_type) );
            setFilteredData(result);
        };
         
    }



    return(
        <>
            <Navbar />
            <section className='shop'>
                <div className='shop-nav'>
                    <ul>
                        <li>
                            <button 
                            onClick={() => filterData('All Plants')}
                            className={activeButton === 'All Plants' ? 'active' : ''}
                            >
                                All Plants
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => filterData('Tropical')}
                            className={activeButton === 'Tropical' ? 'active' : ''}
                            >
                                Tropical
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => filterData('Succulents')}
                            className={activeButton === 'Succulents' ? 'active' : ''}
                            >
                                Cacti & Succulents
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => filterData('Foliage')}
                            className={activeButton === 'Foliage' ? 'active' : ''}
                            >
                                Foliage
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => filterData('Accessories')}
                            className={activeButton === 'Accessories' ? 'active' : ''}
                            >
                                Pots & Accessories
                            </button>
                        </li>
                    </ul>
                </div>
                <div className='card-container'>
                    {filteredData && 
                        filteredData.map((entry, index) => 
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