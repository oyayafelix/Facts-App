import './App.css';
import Demo from './components/demo/Demo';

function App() {


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
      
      <Demo
      />
    </div>
  );
}

export default App;
