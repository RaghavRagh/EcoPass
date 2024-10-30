import { useEffect, useState } from "react";
import {
  AreaTable,
  AreaTop,
  Sidebar,
} from "../../components";
import { SidebarProvider } from "../../context/SidebarContext";
import "./Dashboard.scss";
import { getAllProducts } from "../../api/api";
import ReusabaleModelProduct from "../../components/Dashboard/AddProduct/AddProduct";

const DashboardProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const token = window.localStorage.getItem('token');
      if(!token){
        return;
      }
      const result = await getAllProducts(token);
      if(result.status === 200){
        // console.log(result.data);
        setProducts(result.data);
      }
    }

    fetchProducts();
  },[])

  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: null,
  });

  const handleInput = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setAddProduct({ ...addProduct, image: files[0] });
    } else {
      setAddProduct({ ...addProduct, [name]: value });
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", addProduct.name);
    formData.append("price", addProduct.price);
    formData.append("category", addProduct.category);
    formData.append("description", addProduct.description);
    formData.append("image", addProduct.image);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    console.log(formData);
    console.log(addProduct);
  };

  
  return (
    <>
      <SidebarProvider>
        <div className="dashboard-container">
          <Sidebar />
          <div className="dashboard-content">
            {/* <NavBar /> */}
            <AreaTop />
            <div className="content-area">
              <AreaTable products={products} handleAddProduct={handleAddProduct} addProduct={addProduct} handleInput={handleInput}/>

              {/* Add Product Button */}
              <ReusabaleModelProduct modalTitle="Add New Product" handleAddProduct={handleAddProduct} addProduct={addProduct} handleInput={handleInput}/>

              {/* Success Modal */}
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
                      Product added successfully!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* Closing the dashboard-content div */}
        </div> {/* Closing the dashboard-container div */}
      </SidebarProvider>
    </>
  );
};

export default DashboardProducts;
