import './App.css';
import image1 from './img/image1.jpg';
import Demo from './components/demo/Demo';
// import DATA from './data';
// import {nanoid} from 'nanoid';
// import { useState } from 'react';



function App() {
  // const [facts, setFacts] = useState(DATA);

  // const getFactByCountry = async(country) =>{
  //   const res = await fetch(`${DATA}`)

  //   // console.log(res)
  // }
  // getFactByCountry()

  return (
    <div className="App">
      <nav className='Navbar'>
        <div>
          <a href='*' className='logo'>
            <span className='logo-part-one'>
              INvest
            </span>
            <span className='logo-part-two'>
              Facts
            </span>
          </a>
        </div>
        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Industries</li>
            <li>
              <button>Subscribe</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className='landing-page'>
        <div className='landing-page-img'>
          <img src={image1} alt='' />
        </div>
        <div className='about-us'>
          <h1>About Us</h1>
          <h2>Investment Facts</h2>
          <p>
          Get facts and information from credible sources to assist you with decision making and investing. Source data from over 1000 sources in different industries. This generated data is converted to meaningful information to asist investors in decision making from an informed background.
          </p>
          <button>Learn more</button>
        </div>
      </div>
      <Demo
      />
    </div>
  );
}

export default App;
