'use client'

import { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PopulationData {
  year: number;
  value: number;
}
interface BorderWith{
  commonName: string,
  countryCode: string,
  officialName: string,
  region: string
}

interface CountryDetails {
  borders: BorderWith[];
  populationData: PopulationData[];
  flagUrl: string;
}



const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState<CountryDetails | null>(null);
  const {code} = useParams();


  const fetchCountryDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/countries/${code}`);
      setCountryDetails(response.data);
    } catch (error) {
      console.error('Error fetching country details:', error);
    }
  }
  useMemo(fetchCountryDetails, [code])

  if (!countryDetails) {
    return <div>Loading...</div>;
  }
  console.log(countryDetails.populationData);
  const populationChartData = (countryDetails.populationData && countryDetails.populationData.length) > 0
  ? {
      labels: countryDetails.populationData.map((data) => data.year), // X-axis labels (years)
      datasets: [
        {
          label: 'Population', // Dataset label
          data: countryDetails.populationData.map((data) => data.value), // Y-axis data (population)
          fill: false,
          borderColor: '#4b9a9a',
          tension: 0.1,
        },
      ],
    }
  : null;
    console.log(populationChartData);
  return (
    <div className="container mx-auto max-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Country Details</h1>
      
      <div className="flex justify-center mb-6">
        <Image src={countryDetails.flagUrl || ''} alt="Country Flag" width={100} height={100} />
      </div>

    
      <h2 className="text-2xl font-bold mb-4">Borders</h2>
      {countryDetails.borders?.length > 0 ? (
        <ul className="list-disc list-inside mb-6">
          {countryDetails.borders.map((border) => (
            <li key={border.officialName}>{border.officialName}</li>
          ))}
        </ul>
      ) : (
        <p>No bordering countries found.</p>
      )}


      <h2 className="text-2xl font-bold mb-4">Population Over Time</h2>
      {populationChartData ? (
        <div className="mb-8 h-[20rem] w-[70rem">
          <Line data={populationChartData} />
        </div>
        ) : (
        <p>No population data available.</p>
        )}
    </div>
   
  );
  
};


export default CountryDetails;
