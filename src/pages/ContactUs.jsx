import "../styles/ContactUs.scss";
import ContactImg from "../assets/contact-us.jpg";

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <div className="contact-header">
        <h1>Having Any Query?</h1>
        <p>
        We&apos;re here to help! If you have any questions, concerns, or just need more 
  information, don&apos;t hesitate to reach out. Whether it&apos;s about our services, a 
  product, or just some feedback you&apos;d like to share, we&apos;re always ready to 
  assist you.
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

      <div className="contact-us-container">
        <div className="contact-us-left">
          <img
            src={ContactImg}
            alt="contact img"
            className="contact-us-image"
          />
        </div>
        <div className="contact-us-right">
          <h2>Contact Us</h2>
          <form className="contact-us-form">
            <input
              type="text"
              placeholder="Your Name"
              className="modern-input"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="modern-input"
            />
            <textarea
              placeholder="Your Message"
              className="modern-textarea"
            ></textarea>
            <button type="submit" className="modern-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
