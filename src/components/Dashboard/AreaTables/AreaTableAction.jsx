import { useEffect, useRef, useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import ReusabaleModelProduct from "../AddProduct/AddProduct";
import { deleteProduct, getProductById } from "../../../api/api";

const AreaTableAction = ({
  dataItem,
  handleAddProduct,
  addProduct,
  handleInput,
}) => {
  const [productAction, setProductionAction] = useState({
    view: false,
    edit: false,
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [editData, setEditData] = useState({});

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getProduct = async (id) => {
    setProductionAction({ view: true, edit: false });
    try {
      const response = await getProductById(id);
      setEditData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="action-dropdown-btn"
        onClick={handleDropdown}
      >
        <HiDotsHorizontal size={18} />
        {showDropdown && (
          <div className="action-dropdown-menu" ref={dropdownRef}>
            <ul className="dropdown-menu-list">
              {/* <li className="dropdown-menu-item">
                <button
                  className="dropdown-menu-link"
                  data-bs-toggle="modal"
                  data-bs-target="#addProductModal"
                  onClick={
                    () => getProduct(dataItem.id)
                    // setProductionAction({ view: true, edit: false });
                  }
                >
                  View
                </button>
              </li> */}
              <li className="dropdown-menu-item">
                <button
                  type="button"
                  className="dropdown-menu-link"
                  data-bs-toggle="modal"
                  data-bs-target="#addProductModal"
                  onClick={
                    () => getProduct(dataItem.id)
                    // setProductionAction({ view: false, edit: true });
                  }
                >
                  Edit
                </button>
              </li>
              <li className="dropdown-menu-item">
                <button
                  className="dropdown-menu-link"
                  onClick={async () => {
                    const deleteProductRes = await deleteProduct(dataItem.id);
                    // if(deleteProduct){
                    //   window.location.reload();
                    // }
                    console.log(deleteProductRes);
                  }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
        <ReusabaleModelProduct
          modalTitle={productAction.edit ? "Edit Product" : "View Product"}
          handleAddProduct={handleAddProduct}
          addProduct={addProduct}
          handleInput={handleInput}
          dataItem={dataItem}
          editData={editData}
        />
      </button>
    </>
  );
};

export default AreaTableAction;
