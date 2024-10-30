import QRCode from "react-qr-code";
import FernIcon from "../../components/FernIcon";
import { PiLeaf } from "react-icons/pi";
import { PiLeafFill } from "react-icons/pi";
import "./Certificate.css";

const Certificate = () => {
  //useState
  //UseEffect
  return (
    <>
      <div className="certificate"></div>
      <section
        className="container-md mx-auto d-flex flex-column align-items-center"
        id="certificate"
      >
        <h1 className="text-center display-5">Certificate</h1>
        <div
          className="border max-w-75 max-h-75 m-4 p-4 bg-white shadow"
          style={{ width: "65vw" }}
        >
          <div
            className="h-100 w-100 p-4 position-relative overflow-hidden"
            style={{ backgroundColor: "#f3f5ef" }}
          >
            <img
              src="leaves-bg-2.jpg"
              alt="certificate-bg-img"
              className="position-absolute top-0 start-0 w-100"
              style={{
                opacity: 0.14,
                objectFit: "cover",
                zIndex: 1,
              }}
            />

            <div className="d-flex flex-column gap-5 position-relative z-2">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <FernIcon width="50px" height="50px" />
                  <span className="fs-3">Ecopass</span>
                </div>
                <div className="text-end text-muted small">
                  <p className="mb-0">
                    Certificate no: 460c32-4f02-b54d-913152
                  </p>
                  <p className="mb-0">
                    Certificate url: ecopass://460c32-4f02-b54d-913152
                  </p>
                  <p className="mb-0">Reference Number: 0056</p>
                </div>
              </div>

              <div className="my-3 d-flex justify-content-between align-items-center">
                <div className="left">
                  <h1 className="display-1 fw-semibold">Maggi Noodles</h1>
                  <div className="fs-5">
                    <p className="mb-1">
                      <span>Company: </span>
                      <span className="fw-semibold">Nestle</span>
                    </p>
                    <p className="mb-1">
                      <span>Certification Level: </span>
                      <span className="fw-semibold">70%</span>
                    </p>
                    <p>
                      <span>Rating: </span>
                      <span>
                        <PiLeafFill color="#374836" />
                        <PiLeafFill color="#374836" />
                        <PiLeafFill color="#374836" />
                        <PiLeafFill color="#374836" />
                        <PiLeafFill color="#374836" />
                        <PiLeaf backgroundColor="green" />
                        <PiLeaf backgroundColor="green" />
                        <PiLeaf backgroundColor="green" />
                        <PiLeaf backgroundColor="green" />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="right">
                  <img
                    src="maggi.png"
                    alt="product's image"
                    style={{ width: "20rem" }}
                    className="mr-5"
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="d-flex justify-content-center">
                  {/* <CertifiedIcon width="130px" height="130px" /> */}
                </div>
                <div className="d-flex justify-content-between align-items-center fs-7">
                  <div className="d-flex flex-column">
                    <span>
                      Issue Date:{" "}
                      <span className="fw-semibold">29 Aug 2024</span>{" "}
                    </span>
                    <span>
                      Exp Date: <span className="fw-semibold">29 Aug 2026</span>{" "}
                    </span>
                  </div>
                  <div>
                    <span>Certified by: </span>
                    <span className="fw-semibold">Ecopass</span>
                  </div>
                  <QRCode size={70} value="http://localhost:5173/" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about p-3 bg-white border rounded">
          <p className="m-0" style={{ width: "65vw" }}>
            This certificate verifies that the product Maggi has successfully
            met the eco-friendly standards set by{" "}
            <a href="https://www.nestle.in/" className="link-primary">
              Nestle
            </a>{" "}
            as of 29 Aug 2024. This certification confirms that Maggi adheres
            to environmentally sustainable practices, ensuring minimal impact on
            the environment throughout its lifecycle. The certification is based
            on thorough evaluations conducted by our experts to validate the
            product &apos;s compliance with eco-friendly criteria.
          </p>
        </div>

        <button className="px-4 py-2 m-4 text-white bg-black fs-4">Print</button>
      </section>
    </>
  );
};

export default Certificate;
