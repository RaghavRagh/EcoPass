import "./Product.css";
import { PiLeafFill } from "react-icons/pi";
import CertifiedIcon from "../../components/CertifiedIcon";
import { AiOutlinePercentage } from "react-icons/ai";

const Product = () => {
  return (
    <div className="productWrapper">
      <section className="hero container-md mb-3">
        <div className="row gap-3">
          <div className="prodLeft col-lg d-flex flex-column justify-content-center p-3">
            <h1 className="display-1 fw-bold mb-4 text-uppercase title">
              Organic Coffee Pods
              <div id="circleHero"></div>
            </h1>
            <p>
              Compostable Coffee Pods has been evaluated and certified by
              EcoPass for its commitment to sustainable practices. This product
              meets our eco-friendly standards by using responsibly sourced
              ingredients and reducing its environmental footprint through
              eco-conscious packaging.
            </p>
            <a
              href="http://localhost:5173/certificate"
              target="_blank"
              className="text-decoration-none"
            >
              View Certificate
            </a>
          </div>
          <div className="prodRight col-lg text-center">
            <img
              src="organic-coffee.png"
              alt="product's image"
              style={{ width: "75%" }}
            />
            {/* <div id="circleHero"></div> */}
          </div>
        </div>
      </section>
      <div className="movingText p-2">
        <div className="con">
          <h1>ECOPASS</h1>
          <div className="circle"></div>
          <h1>CERTIFIED</h1>
          <div className="circle"></div>
        </div>
        <div className="con">
          <h1>ECOPASS</h1>
          <div className="circle"></div>
          <h1>CERTIFIED</h1>
          <div className="circle"></div>
        </div>
        <div className="con">
          <h1>ECOPASS</h1>
          <div className="circle"></div>
          <h1>CERTIFIED</h1>
          <div className="circle"></div>
        </div>
        <div className="con">
          <h1>ECOPASS</h1>
          <div className="circle"></div>
          <h1>CERTIFIED</h1>
          <div className="circle"></div>
        </div>
      </div>
      <section className="details">
        <div className="container">
          <div className="statsWrapper p-md-4 p-2">
            <div className="stats">
              <span>8</span>
              <PiLeafFill size={95} />
            </div>
            <div className="stats">
              <span>91</span>
              <AiOutlinePercentage />
            </div>
            <div className="stats">
              <CertifiedIcon height="140px" />
            </div>
          </div>
          <div className="lorem text-center my-4">
            <p>
              Certified by EcoPass, ensuring our products are produced in a way
              that minimizes harm to the planet.
            </p>
            <p>
              Awarded for our exceptional commitment to responsible sourcing and
              reduced environmental impact.
            </p>
            <p>
              These pods break down naturally in compost environments, reducing
              landfill waste and contributing to a healthier ecosystem. This
              means you can dispose of them with peace of mind, knowing they'll
              decompose into nutrient-rich soil.
            </p>
          </div>
        </div>
      </section>
      <section className="container-md">
        <div className="ecoDetails text-center my-4">
          <h1 className="m-5 display-4">
            How these Coffee Pods Are Eco-Friendly
          </h1>
          <div className="row my-5">
            <div className="col-md">
              <img
                src="organic-coffee-2.png"
                alt="product image"
                style={{ width: "40%" }}
              />
            </div>
            <div className="col-md d-flex flex-column justify-content-center">
              <h2 className="text-decoration-underline">
                1. Biodegradable Materials
              </h2>
              <p className="fs-5 text-justify">
                Organic coffee pods are made from plant-based materials,
                designed to break down in commercial composting facilities
                within 12 weeks.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md d-flex flex-column justify-content-center">
              <h2 className="text-decoration-underline">
                2. Eco-Friendly Packaging
              </h2>
              <p className="fs-5 text-justify">
                The packaging is made from recycled paper and soy-based inks,
                minimizing the impact on the environment.
              </p>
            </div>
            <div className="col-md">
              <img
                src="organic-coffee-3.png"
                alt="product image"
                style={{ width: "80%" }}
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md">
              <img
                src="organic-coffee-4.png"
                alt="product image"
                style={{ width: "70%" }}
              />
            </div>
            <div className="col-md d-flex flex-column justify-content-center">
              <h2 className="text-decoration-underline">
                3. Carbon Footprints
              </h2>
              <p className="fs-5 text-justify">
                We use renewable energy in our manufacturing process, reducing
                our carbon footprint by 50% compared to traditional coffee pods.
              </p>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md d-flex flex-column justify-content-center">
              <h2 className="text-decoration-underline">
                4. Certified Quality
              </h2>
              <p className="fs-5 text-justify">
                Each pod is rigorously tested to ensure it meets our high
                standards for taste and eco-friendliness.
              </p>
            </div>
            <div className="col-md">
              <img
                src="organic-coffee-3.png"
                alt="product image"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="vh-100 details"></section> */}
    </div>
  );
};

export default Product;
