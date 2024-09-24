import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import { getProductData } from './productData';
import { useState, useEffect } from 'react';
import '../styles/Shop.css';


function Shop() {
    const productData = getProductData()
    const [filteredData, setFilteredData] = useState(null)
    const [activeButton, setActiveButton] = useState('All Plants')

    useEffect(() => {
        if(productData) {
          filterData('All Plants')
        }
    }, [productData]);

    function filterData(filterType) {
        setActiveButton(filterType);

        if (filterType == 'Accessories' || filterType == 'All Plants' ) {
            const result = productData.filter((product) => filterType.includes(product.product_type) );
            setFilteredData(result);
        } else {
            const result = productData.filter((product) => filterType.includes(product.plant_type) );
            setFilteredData(result);
        };
    }

    return (
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
                            />
                        )
                    }
                </div>
                
            </section>
            <Footer />
        </>
    )
}

export default Shop