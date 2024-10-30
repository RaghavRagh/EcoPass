import "../styles/AboutUs.scss";
import avatar from "../assets/avatar.png";
import story from "../assets/story.png";
import mission from "../assets/mission.png";
import values from "../assets/values.png";
import impact from "../assets/impact.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-section">
        <div className="about-header">
          <h1>Who We Are?</h1>
          <p>
          At EcoPass, we provide clear, data-driven insights to help you make sustainable choices. Our goal is to promote transparency, making it easy for you to identify eco-friendly products that align with your values.
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

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {["Ravi Bhaskar", "Paras Rawat", "Raghav", "Pawan", "Priyansh"].map((name, index) => (
              <div className="team-member" key={index}>
                <img src={avatar} alt={name} />
                <h3>{name}</h3>
                <p>{`example${index + 1}@gmail.com`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="about-details">
        <div className="about-container">
          {[
            { image: story, title: "Our Story", text: "Our journey began with a mission to make sustainability accessible to everyone. Frustrated by the lack of reliable information on eco-friendly products, we started as a small group of eco-conscious individuals. Today, we are proud to be a trusted resource for consumers seeking sustainable choices." },
            { image: mission, title: "Our Mission", text: "Our mission is to empower consumers with transparent and unbiased reviews of eco-friendly products, believing that every small choice towards sustainability creates a significant impact on the planet." },
            { image: values, title: "Our Values", text: "We prioritize products that have a positive impact on the environment, selecting those that promote sustainability, reduce waste, and support eco-friendly practices. By highlighting these products, we aim to encourage consumers to make informed choices that contribute to a healthier planet." },
            { image: impact, title: "Our Impact", text: "We have helped thousands of consumers make more sustainable  choices, and we’re just getting started. Our goal is to continue growing our community and expanding our impact, one eco-friendly product at a time." }
          ].map((detail, index) => (
            <div className="about-container-detail" key={index}>
              <img src={detail.image} alt={detail.title} />
              <h4>{detail.title}</h4>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>

        <ul className="impact-stats">
          {[
            { icon: "fas fa-leaf", number: "5,000+", label: "Eco-friendly products reviewed" },
            { icon: "fas fa-users", number: "10,000+", label: "Consumers empowered" },
            { icon: "fas fa-globe", number: "100+", label: "Countries reached" }
          ].map((stat, index) => (
            <li key={index}>
              <i className={stat.icon}></i>
              <strong>{stat.number}</strong>
              <p>{stat.label}</p>
            </li>
          ))}
        </ul>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {[
              { icon: "fas fa-leaf", title: "Sustainability", text: "We promote practices that contribute to a healthier planet." },
              { icon: "fas fa-users", title: "Community", text: "We believe in the power of collective change." },
              { icon: "fas fa-balance-scale", title: "Transparency", text: "Our reviews are unbiased and fact-based." },
              { icon: "fas fa-recycle", title: "Innovation", text: "We explore the latest eco-friendly trends and products." }
            ].map((value, index) => (
              <div className="value-item" key={index}>
                <i className={value.icon}></i>
                <h5>{value.title}</h5>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
