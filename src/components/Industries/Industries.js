import "./Industries.css";
import { useState, useEffect } from "react";
import Industry from "../Industry/Industry";
function Industries() {
  const [industries, setIndustries] = useState([]);

  useEffect(() => {
    getIndustries();
  }, []);

  const getIndustries = async () => {
    await fetch('http://localhost:8000/industries')
      .then((res) => res.json())
      .then((data) => setIndustries(data));
  };

  const AddIndustry = async (name, description) => {
    await fetch('http://localhost:8000/industries', {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIndustries((industries) => [...industries, data]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddIndustry(e.target.industry.value, e.target.description.value);
    e.target.industry.value = "";
    e.target.description.value = "";
  };

  return (
    <div className="industries">
      <h3>List of Industries In Kibra</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="industry" placeholder="Enter industry name" />
        <br />
        <textarea name="description" placeholder="Enter description"></textarea>
        <br />
        <button>Add Industry</button>
      </form>
      <div className="industry-and-advert">
        <div>
          {industries.map((industry) => (
            <Industry
              id={industry.id}
              key={industry.id}
              name={industry.name}
              description={industry.description}
            />
          ))}
        </div>
        <div className="advert">
          <h4>Advertise Here</h4>
          <p>Ads</p>
        </div>
      </div>
    </div>
  );
}

export default Industries;
