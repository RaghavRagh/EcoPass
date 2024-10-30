import { useEffect, useState } from "react";
import {
  AreaCards,
  AreaCharts,
  AreaTable,
  AreaTop,
  Sidebar,
} from "../../components";
import { SidebarProvider } from "../../context/SidebarContext";
//import NavBar from "../../components/NavBar/NavBar";
import "./Dashboard.scss";
import { addProducts, getCategory } from "../../api/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);

  const handleInput = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setAddProduct((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setAddProduct({ ...addProduct, [name]: value });
    }
  };
  useEffect(() => {
    if(!window.localStorage.getItem('token')){
      navigate('/login')
    }
  }, [])
  
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("Name", addProduct.name);
    formData.append("Price", addProduct.price);
    formData.append("CategoryId", addProduct.category);
    formData.append("CompanyId", 1);
    formData.append("Description", addProduct.description);
    formData.append("File", addProduct.image);

    try {
      setIsLoading(true);
      await addProducts(formData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    //
    // console.log(addProduct);
  };

  useEffect(() => {
    console.log(addProduct);
  }, [addProduct]);

  // getting category
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await getCategory();
        console.log(response);
        setCategory(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategory();
  }, []);
  
  useEffect(() => {
      const checkStatus = () =>{
        const expiresDate = window.sessionStorage.getItem('expires');
  
        const curentDate = new Date().toISOString();
        console.log(curentDate, expiresDate);
        if(curentDate > expiresDate){
          window.sessionStorage.removeItem('expires');
          window.localStorage.removeItem('token');
          // window.location.reload();
          navigate('/login')
        }
      }
      checkStatus();
    
  },[])
  return (
    <>
      <SidebarProvider>
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            {/* <NavBar /> */}
            {/* Additional dashboard content can be added here */}
            <AreaTop />
            <div className="content-area">
              <AreaCards />
              <AreaCharts />
              <AreaTable />
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
              >
                Add Product
              </button>
              <div
                className="modal fade"
                id="addProductModal"
                tabIndex="-1"
                aria-labelledby="addProductModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="addProductModalLabel">
                        Add New Product
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form
                        id="addProductForm"
                        onSubmit={handleAddProduct}
                        className="needs-validation"
                      >
                        <div className="mb-3">
                          <label htmlFor="productName" className="form-label">
                            Product Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="productName"
                            value={addProduct.name}
                            onChange={handleInput}
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="price" className="form-label">
                            Price
                          </label>
                          <div className="input-group">
                            {" "}
                            <span className="input-group-text" id="price">
                              ₹
                            </span>
                            <input
                              type="number"
                              name="price"
                              className="form-control"
                              id="price"
                              value={addProduct.price}
                              onChange={handleInput}
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="category" className="form-label">
                            Category
                          </label>
                          <select
                            name="category"
                            className="form-select"
                            id="category"
                            value={addProduct.category}
                            onChange={handleInput}
                            required
                          >
                            <option selected disabled value="">
                              Select category
                            </option>
                            {category.length > 0 ? (
                              category.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.id}
                                </option>
                              ))
                            ) : (
                              <option disabled>No categories available</option>
                            )}
                            {/* <option value="Food">Food</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Other">Other</option> */}
                          </select>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description
                          </label>
                          <textarea
                            name="description"
                            className="form-control"
                            id="productDescription"
                            rows="3"
                            value={addProduct.description}
                            onChange={handleInput}
                            required
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Upload image
                          </label>
                          <input
                            name="image"
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={handleInput}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        onSubmit={handleAddProduct}
                        className="btn btn-success"
                        form="addProductForm"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex="-1"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id="exampleModalToggleLabel2"
                      >
                        Success!
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body text-center fs-1 m-3">
                      {isLoading ? (
                        <span>Adding...</span>
                      ) : (
                        <span>Product Added Successfully!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
