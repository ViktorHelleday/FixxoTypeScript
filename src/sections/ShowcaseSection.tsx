import { NavLink } from 'react-router-dom';
import scimg1 from '../assets/images/showcaseImgLeft.png';
import scimg2 from '../assets/images/showcaseImgRight.png';

const ShowcaseSection: React.FC = () => {
  return (
    <section className="showcase">
        <div className="container-fluid">
            <img className="scimgleft" src={scimg1} alt="Showcase" />
            <div className="middlecontent">
                <h1>SALE UP TO 50% OFF</h1>
                <p>Online shopping with free home delivery over $100</p>
                <NavLink to="/products" className="btn-theme">
                    <span className="corner-left"></span>
                    SHOP NOW
                    <span className="corner-right"></span>
                </NavLink>
            </div>
            <img className="scimgright" src={scimg2} alt="Showcase" />
        </div>
    </section>
  )
}

export default ShowcaseSection