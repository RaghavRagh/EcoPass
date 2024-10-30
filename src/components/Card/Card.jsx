// import { PiLeafFill } from "react-icons/pi";
import "./Card.css";

const Card = ({ name, image, score, category, description }) => {
  return (
    <div className="card border-0 rounded-0 mb-3 p-3 rounded-2 shadow-2">
      <div className="row g-0 bg-white">
        <div className="cardImage col-md-3">
          <img src={image} className="img-fluid rounded" alt="product image" />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex flex-column w-100 h-100 ms-md-4 p-0 pt-3 pt-md-2 pe-md-4">
            <h5 className="card-title text-start">{name}</h5>
            <p className="card-text text-justify">{description}</p>
            <div className="d-flex flex-column text-start">
              {/* <span>
                <stron>{score.charAt(0)}</stron>
                <PiLeafFill className="ms-1" />
              </span> */}
              <span>
                Score: <strong>{score} </strong>
              </span>
              <span className="text-secondary">
                Category: {category}
              </span>
            </div>
            <span className="text-end mt-md-auto mt-4">
              <a href="/product" className="detailsBtn btn btn-outline-success">
                Details
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
