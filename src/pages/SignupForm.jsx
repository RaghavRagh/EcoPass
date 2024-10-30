import { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardFooter,
    MDBSpinner,
} from 'mdb-react-ui-kit';
import { signUp } from '../api/api';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const [logo, setLogo] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogoChange = (e) => {
        setLogo(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newLogoFormData = new FormData();
        const enteredValues = Object.fromEntries(formData.entries());
        const data = {
            CompanyName: enteredValues.companyName,
            Email: enteredValues.email,
            Password: enteredValues.password,
            RegistrationNumber: enteredValues.registrationNumber,
            Address: enteredValues.companyAddress,
            City: enteredValues.city,
            States: enteredValues.state,
            PostalCode: enteredValues.postalCode,
            PhoneNumber: enteredValues.phoneNumber,
        }

        newLogoFormData.append('logo', logo);

        // console.log(newLogoFormData, 'newlogo')

        setLoading(true);
        const response = await signUp(data, newLogoFormData);
        if (response.status === 201) {
            navigate('/dashboard')
            console.log(response, 'response');
        } else {
            console.log(response, 'error response');
        }
        setLoading(false);
    };

    return (
        <MDBContainer className="my-5">
            <MDBRow className="justify-content-center">
                <MDBCol md="8" lg="6">
                    <MDBCard className="shadow-3 border-0">
                        <MDBCardHeader className="text-center bg-light bg-gradient text-black rounded-top">
                            <h3>Company Signup Form</h3>
                        </MDBCardHeader>
                        <MDBCardBody className="p-4">
                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    name='companyName'
                                    label="Company Name"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline

                                />
                                <MDBInput
                                    name='email'
                                    label="Email Address"
                                    type="email"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='password'
                                    label="Password"
                                    type="password"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='confirmPassword'
                                    label="Confirm Password"
                                    type="password"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='registrationNumber'
                                    label="Company Registration Number"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='companyAddress'
                                    label="Company Address"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='city'
                                    label="City"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <MDBInput
                                    name='state'
                                    label="State"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline

                                />
                                <MDBInput
                                    name='postalCode'
                                    label="Postal Code"
                                    type="text"
                                    className="mb-4"
                                    required
                                    outline

                                />
                                <MDBInput
                                    name='phoneNumber'
                                    label="Phone Number"
                                    type="tel"
                                    className="mb-4"
                                    required
                                    outline
                                />
                                <div className="mb-4">
                                    <label htmlFor="logoUpload" className="form-label">
                                        Company Logo
                                    </label>
                                    <input
                                        name="logo"
                                        type="file"
                                        id="logoUpload"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        required
                                    />
                                </div>
                                <MDBBtn
                                    type="submit"
                                    color="primary"
                                    block
                                    className="shadow-2"
                                    style={{ padding: '12px', fontSize: '1.1rem', borderRadius: '25px' }}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <MDBSpinner size="sm" role="status" tag="span" className="me-2" />
                                            Signing Up...
                                        </>
                                    ) : (
                                        'Sign Up'
                                    )}
                                </MDBBtn>
                            </form>
                        </MDBCardBody>
                        <MDBCardFooter className="text-center bg-light rounded-bottom">
                            <small>
                                Already have an account? <a href="/login">Login here</a>
                            </small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default SignupForm;
