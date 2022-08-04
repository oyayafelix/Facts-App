import './Demo.css';
import DATA from '../../data';
import { useState } from 'react';
import {apiUrl } from '../api';

//console.log (apiUrl)


function Demo(){

    const [data, setData] = useState(DATA);
    const [countries, setCountries] =useState([]);
    const [error, setError] =useState("");

    const getAllCountries = async () => {
        try {
          const res = await fetch(`${apiUrl}/all`);
          if (!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
    
          setCountries(data);
        } catch (error) {
          setError(error.message);
        }
      };
    
    

    const filterResult = (countryItem) => {
        const result = DATA.filter((curData) =>{
            return curData.category === countryItem;

        });
        setData(result); 
    }

    return (
    <div>
        <h3>Try our demo for free</h3>       
        <div>
            <button onClick={() => setData(DATA)}>All</button>
            <button onClick={() => filterResult('Kenyan')}>Kenya</button>
            <button onClick={() => filterResult('Tanzanian')}>Tanzania</button>
            <button onClick={() => filterResult('Jamaican')}>Jamaica</button>
            <button onClick={() => filterResult('Mexican')}>Mexico</button>
        </div>
        <div>
            <h3>Facts</h3>
            {data.map((values) => {
                const {id, faq} = values;
                return (
                        <div key={id}>
                            <p>{faq}</p>
                        </div>
                )
            })}  
        </div>
        <div className="countries">
  {error && <h3>{error}</h3>}
  {countries?.map((country) => (
    <div className="allCountries" key={country.name.common}>
              <img className="flag" src={country.flags.png} alt="flag" />

              <div className="all-countries-detail mainDark">
                <h2 className="all-countries-name">{country.name.common}</h2>
                <p className="all-countries-population">
Population:
                  <span>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </p>
                <p className="all-countries-region">
                  Region: <span>{country.region}</span>
                </p>
                <p className="all-countries-capital">
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
    </div>
  ))}
</div>



            
    </div>
    );
}

export default Demo;
