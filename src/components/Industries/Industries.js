import './Industries.css';
import api from '../api';
import {useState, useEffect} from 'react';

function Industries(){
    const [industries, setIndustries] = useState([]);
    const [formData, setFormData] = useState({industry: ""});

    //get all industries
    useEffect(() => {
        fetch("http://localhost:3001/industries")
        .then((response) => response.json())
        .then((data)=>{
            setIndustries(data)
            // console.log(data[0].name)
        })
    },[]);
    
    const renderIndustries = industries.map((industry) => {
        return(
            <div  key={industry.id}>
                <ul>
                    <li>
                    {industry.name} --
                    {industry.rating}
                    </li>
                </ul>
                
            </div>
        )
    })
    function handleChange(event){
        setFormData(event.target.value,);
        console.log(event.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        addIndustry()
        
    }

    function addIndustry(){
        console.log('Submitted')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='industry' value={formData.industry} onChange={handleChange}/>
                <button>Submit</button>
            </form>
            {renderIndustries}

        </div>
    )
}

export default Industries;