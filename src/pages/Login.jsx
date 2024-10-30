import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBInput } from 'mdb-react-ui-kit';
import { login } from "../api/api";
// import "fortawesome/fontawesome-free/css/all.min.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    const result = await login(formData);
    if(result.data.access_token) {
      window.localStorage.setItem('token', result.data.access_token);
      window.sessionStorage.setItem('expires', result.data.expires);
      navigate('/dashboard');
    } else {
      console.log('Login Failed');
    }
    // Add login logic here
    console.log('Login Form Submitted', { email, password });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="border rounded row p-5">
        <div className="col-6 container">
          <div className="container mb-5">
            <img src={logo} className="nav-logo " alt="logo" width={"100rem"} height={"100rem"} />
          </div>

          <h1 className="text-center mb-4">Login to Your Account</h1>
        </div>
        <div className="col-lg-6 p-lg-5">

          <form>
            <div className="mb-4">            
              <MDBInput
                label="Email"
                id="loginEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
              <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
            </div>
            <div className="mb-4">
              <MDBInput
                label="Password"
                type="password"
                className="form-control"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100" onClick={handleSubmit}>Login</button>
          </form>
          <div className="text-center mt-3">
            <p>Don&apos;t have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Login;