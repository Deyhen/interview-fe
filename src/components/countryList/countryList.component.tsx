'use client'

import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Country {
  name: string;
  countryCode: string;
}

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/countries`);
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Countries</h1>
      <ul className="space-y-4 grid grid-cols-10 max-h-screen">
        {countries.map((country) => (
            <Link href={`/country/${country.countryCode}` } key={country.countryCode} className='border-blue-400 border-2 w-24 h-12 mx-4 my-2 flex justify-center items-center'>
                <li  className="text-center text-blue-500 hover:underlin">
                    {country.name}
                </li>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;