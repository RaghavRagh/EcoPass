import { Link } from "react-router-dom";
import "./PageNotFound.scss"; // Custom styles

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="content">
        <h1 className="error-code">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          We&apos;re sorry, but the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
