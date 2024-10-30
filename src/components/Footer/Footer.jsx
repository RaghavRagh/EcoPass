import './Footer.scss';
import logo from '../../assets/logo.png'; // Assuming the logo image is in the correct folder
import { NavLink } from 'react-router-dom'; // Import NavLink

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo-container">
                <img src={logo} alt="Eco-Friendly Logo" className="footer-logo" />
                <NavLink to="/home" className="footer-logo-text">EcoPass</NavLink>
            </div>
            <div className="footer-container">
                <div className="footer-about">
                    <h3>About Us</h3>
                    <p>At EcoPass, we provide clear, data-driven insights to help you make sustainable choices. Our goal is to promote transparency, making it easy for you to identify eco-friendly products that align with your values.</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/search">Search Product</NavLink></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@eco-pass.com</p>
                    <p>Phone: +91 7903 243 890</p>
                    <p>Address: Raipur Khadar Sector 126, Noida, INDIA</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                        <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#"><i className="bi bi-youtube"></i></a></li>
                        <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>#MadeInIndia | &copy; 2024 EcoPass. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
