import image1 from '../../img/image1.jpg';
import './Landing-page.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-img">
        <img src={image1} alt="" />
      </div>
      <div className="about-us">
        <h2>Industries Management System In Kibra</h2>
        
        <p>
          Get facts and information from credible sources to assist you with
          decision making and investing. Source data from over 1000 sources in
          different industries. This generated data is converted to meaningful
          information to asist investors in decision making from an informed
          background.
        </p>
        <button>Learn more</button>
      </div>
    </div>
  );
}

export default LandingPage;