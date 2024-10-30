import { useState, useEffect } from "react";

const ReusabaleModelProduct = ({
  modalTitle,
  handleAddProduct,
  handleInput,
  editData,
}) => {
  // Local state to hold form data
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  // Use effect to update form data whenever editData changes
  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        price: editData.price || "",
        category: editData.category || "",
        description: editData.description || "",
      });
    }
  }, [editData]);

  // Handle input changes for controlled components
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async () => {
  //   try {
  //     const response = await 
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <>
      {modalTitle === "Add New Product" && (
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addProductModal"
        >
          Add Product
        </button>
      )}

      {console.log(editData)}
      {/* Add/Edit Product Modal */}
      <div
        className="modal fade"
        id="addProductModal"
        tabIndex="-1"
        aria-labelledby="addProductModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addProductModalLabel">
                {modalTitle}
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
                    value={formData.name}
                    onChange={handleFormInput}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="price">
                      ₹
                    </span>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      id="price"
                      value={formData.price}
                      onChange={handleFormInput}
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
                    value={formData.category}
                    onChange={handleFormInput}
                    required
                  >
                    <option disabled value="">
                      Select category
                    </option>
                    <option value="Food">Food</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Other">Other</option>
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
                    value={formData.description}
                    onChange={handleFormInput}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">
                    Upload image
                  </label>
                  <input className="form-control" type="file" id="formFile" />
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
                // onSubmit={handleSubmit}
                className="btn btn-success"
                form="addProductForm"
              >
                {modalTitle === "Edit Product" ? "Save Changes" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReusabaleModelProduct;
