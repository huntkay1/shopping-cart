import { useState, useEffect } from 'react';

export function getProductData() {
    const [plantData, setPlantData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/products', { mode: 'cors' });
                const data = await response.json();
                setPlantData(data);
            } catch (error) {
                console.error('Error fetching plant data:', error);
            }
        };

        fetchData();
    }, []);

    return plantData;
}