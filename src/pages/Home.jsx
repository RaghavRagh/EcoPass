import { useState, useEffect } from "react";
import Img1 from "../assets/bg1.jpg";
import Img2 from "../assets/bg-phone.jpg"; // Smaller image for devices under 768px
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.scss";
import { Link } from "react-router-dom";

import carbonFootprint from "../assets/carbon-footprint.png";
import wwd1 from "../assets/sourcing.png";
import wwd3 from "../assets/recycle.png";
import wwd4 from "../assets/energy.png";

import ecoFriendlyInfo from "../assets/eco-friendly-info.jpg";
import rating from "../assets/leaf-rating.jpg";
import EcoPercentage from "../assets/eco-percentage.png"

const Home = () => {
  const [ecoFriendlyPercentage, setEcoFriendlyPercentage] = useState(0);

  useEffect(() => {
    let timeout;
    if (ecoFriendlyPercentage < 100) {
      timeout = setTimeout(
        () => setEcoFriendlyPercentage(ecoFriendlyPercentage + 1),
        50
      );
    }
    return () => clearTimeout(timeout);
  }, [ecoFriendlyPercentage]);

  return (
    <>
      <header className="carousel-container">
        <div className="overlay"></div>

        {/* For large screens */}
        <img
          src={Img1}
          className="background-img-large"
          alt="Eco-Friendly Background"
        />

        {/* For small screens (less than 768px) */}
        <img
          src={Img2}
          className="background-img-small"
          alt="Eco-Friendly Mobile Background"
        />

        <div className="text-content">
          <h1 className="fadeIn">Eco-Friendly</h1>
          <h1 className="fadeIn">Products</h1>
          <p className="fadeIn">Discover our commitment to sustainability</p>

          <div className="counter-container fadeIn">
            <div className="counter-text">{ecoFriendlyPercentage}%</div>
            <p>
              Check how eco-friendly this product is with percentages ranging
              from 0% to {ecoFriendlyPercentage}%{" "}
            </p>
          </div>

          <Link to="/login">
            <button className="learn-more-btn fadeIn">
              Register Your Brand Now
            </button>
          </Link>
        </div>
      </header>

      <div className="info-one-section">
        <div className="info-one-header">
          <h1>What We Do ?</h1>
          <p>
            EcoPass evaluates how eco-friendly a product is by looking at
            factors like
          </p>
        </div>

        {/* Wave SVG with 100% width */}
        <div className="wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L30,186.7C60,213,120,267,180,250.7C240,235,300,149,360,106.7C420,64,480,64,540,90.7C600,117,660,171,720,197.3C780,224,840,224,900,213.3C960,203,1020,181,1080,154.7C1140,128,1200,96,1260,106.7C1320,117,1380,171,1410,197.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Card Section */}
        <div className="card-container">
          <div className="step-card">
            <img src={wwd1} alt="Product 1" />
            <div className="steps-card-title">Sustainable Sourcing</div>
            <div className="card-description">
              Are the raw materials renewable and responsibly sourced?
            </div>
          </div>

          <div className="step-card">
            <img src={carbonFootprint} alt="Product 2" />
            <div className="steps-card-title">Carbon Footprint</div>
            <div className="card-description">
              What is the environmental impact of producing, shipping, and using
              the product?
            </div>
          </div>

          <div className="step-card">
            <img src={wwd3} alt="Product 3" />
            <div className="steps-card-title">Recyclability & Waste</div>
            <div className="card-description">
              How easy is it to recycle the product? Does it contribute to
              long-term waste reduction?
            </div>
          </div>

          <div className="step-card">
            <img src={wwd4} alt="Product 4" />
            <div className="steps-card-title">Energy Efficiency</div>
            <div className="card-description">
              Does the product use energy wisely throughout its lifecycle?
            </div>
          </div>
        </div>
      </div>

      <div className="info-second-section">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L30,133.3C60,107,120,53,180,69.3C240,85,300,171,360,213.3C420,256,480,256,540,229.3C600,203,660,149,720,122.7C780,96,840,96,900,106.7C960,117,1020,149,1080,165.3C1140,181,1200,181,1260,160C1320,139,1380,85,1410,64L1440,43L1440,0L0,0Z"
          ></path>
        </svg>
        <div className="info-second-header">
          <h1>How Our Rating System Works</h1>
          <p>
            We make it simple for you to understand a products environmental
            impact
          </p>
        </div>

        {/* Wave SVG with 100% width */}
        <div className="wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L30,186.7C60,213,120,267,180,250.7C240,235,300,149,360,106.7C420,64,480,64,540,90.7C600,117,660,171,720,197.3C780,224,840,224,900,213.3C960,203,1020,181,1080,154.7C1140,128,1200,96,1260,106.7C1320,117,1380,171,1410,197.3L1440,224L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="info-section-container">
      <div className="image-section">
        <img src={ecoFriendlyInfo} alt="Delicious Dish" className="eco-image" />
    </div>
      <div className="info-section">
        <div className="icon-text">
            <img src={rating} alt="Coffee Icon" className="icon" />
            <h3>Leaf Rating</h3>
            <p>Each product is rated on a scale of 1 to 10 leaves, with 10 leaves being the most eco-friendly.</p>
        </div>
        <div className="icon-text">
            <img src={EcoPercentage} alt="Food Icon" className="icon" />
            <h3>Eco-Friendliness Percentage</h3>
            <p>We also provide a percentage score that shows how much of the product’s life cycle supports sustainability, from sourcing to disposal.</p>
        </div>
    </div>
      </div>
    </>
  );
};

export default Home;
