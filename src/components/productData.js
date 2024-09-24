import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sdbbyfkkilxegwnepgdz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkYmJ5ZmtraWx4ZWd3bmVwZ2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMjU0NjgsImV4cCI6MjA0MjcwMTQ2OH0.S6NHVLMV7ar_GL4kVmZRtmTWfXwmDnowgp_t7th3YR8'
const supabase = createClient(supabaseUrl, supabaseKey);


export function getProductData() {
    const [plantData, setPlantData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from Supabase
                const { data, error } = await supabase
                    .from('plant-shop-data')  // Use the correct table name
                    .select('*');

                if (error) {
                    throw error;
                }

                setPlantData(data);
            } catch (error) {
                console.error('Error fetching plant data:', error);
            }
        };

        fetchData();
    }, []);

    return plantData;
}
