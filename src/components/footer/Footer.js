import './Footer.css';
import whatsapp from '../../img/whatsapp.png';
import facebook from '../../img/facebook.png';
import instagram from '../../img/instagram.png';
import twitter from '../../img/twitter.png';

function Footer(){
  return(
    <div className="footer">
      <h4>Follow us on social media</h4>
      <p>
        <span><img src={whatsapp} alt="" /></span>
        <span><img src={facebook} alt="" /></span>
        <span><img src={instagram} alt="" /></span>
        <span><img src={twitter} alt="" /></span>
      </p>
    </div>
  )
}

export default Footer;
