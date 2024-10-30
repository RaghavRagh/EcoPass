import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecofriendly.azurewebsites.net/api",
});

// Add Product
export const addProducts = async (formData) => {
  try {
    const response = await api.post("/Products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Edit Product
export const editProducts = async (formData) => {
  try {
    const response = await api.put("/Products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

// Get Product for viewing in dashboard
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/Products/${id}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getCategory = async () => {
  try {
    const response = await api.get("/Products/Category");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async (query) => {
  try {
    const response = await api.get(`/Products/Search/${query}`);
    const products = response.data;

    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        try {
          const imageResponse = await api.get(`Products/data/${product.id}`, {
            responseType: "blob",
          });
          const image = URL.createObjectURL(imageResponse.data);
          return { ...product, image };
        } catch (error) {
          console.error(
            `Failed to load image for product ${product.id}:`,
            error
          );
          return product;
        }
      })
    );

    return productsWithImages;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (formData) => {
  try {
    const response = await api.post("/auth", formData);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export const signUp = async (formData, logo) => {
  try {
    const response = await api.post(`/companies`, logo,{
      headers: {
        "Content-Type": "*/*",

      },
      params:formData,
    },
   
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getAllProducts = async (token) => {
  
  try {
    const response = await api.get("/Products/GetProducts",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data)
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/Products/${id}`,
      {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem('token')}`,
        },
      }

    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export const GetCertificateDetails = async (id) => {
  try {
    const response = await api.get(`/Certificate/${id}`,{
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}