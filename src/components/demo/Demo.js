import './Demo.css';
import DATA from '../../data';
import { useState } from 'react';


function Demo(){

    const [data, setData] = useState(DATA);

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
    </div>
    );
}

export default Demo;