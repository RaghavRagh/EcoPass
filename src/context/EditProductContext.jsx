import { createContext, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export const EditProductContext = createContext({});

export const EditProductProvider = ({ children }) => {
  const [editProduct, setEditProduct] = useState({});
  
  return (
    <EditProductContext.Provider value={{ editProduct, setEditProduct }}>
      {children}
    </EditProductContext.Provider>
  );
};

EditProductProvider.propTypes = {
    children: propTypes.rounded,
}
