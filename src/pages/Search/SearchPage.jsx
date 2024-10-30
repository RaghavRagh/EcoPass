import "./SearchPage.css";
import { useState } from "react";
import products from "../../utils/products";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getProducts } from "../../api/api";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  const handleSearch = async (query) => {
    const searchLower = query.trim().toLowerCase();
    const results = await getProducts(searchLower);
    console.log(results);
    // const results = products.filter(
    //   (product) =>
    //     product.name.toLowerCase().includes(searchLower) ||
    //     product.category.toLowerCase().includes(searchLower) ||
    //     product.description.toLowerCase().includes(searchLower)
    // );

    setFilteredProducts(results);

    navigate("/search/listing", {
      state: { searchQuery: query, filteredProducts: results },
    });
  };

  return (
    <div className="searchPageWrapper">
      <div className="imageContainer"></div>
      <div className="container h-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-2 fw-bold pb-4">Search Products</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          paddingY={3}
        />
        <p className="searchDesc">
          Discover a wide range of eco-friendly products certified for
          sustainability. Use the search bar above to explore and find the best
          products for your needs. Let’s make the planet greener together!
        </p>
      </div>
    </div>
  );
};

export default SearchPage;
