import { useEffect, useState, useCallback } from "react";
import "./SearchBar.css";
import { RiSearch2Line } from "react-icons/ri";
import products from "../../utils/products";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/api";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch, paddingY }) => {
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const searchProducts = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const searchLower = query.trim().toLowerCase();
    try {
      const filtered = await getProducts(searchLower);
      setSuggestions(filtered.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
    // const filtered = products
    //   .filter(
    //     (product) =>
    //       product.name.toLowerCase().includes(searchLower) ||
    //       product.category.toLowerCase().includes(searchLower) ||
    //       product.description.toLowerCase().includes(searchLower)
    //   )
    //   .sort((a, b) => {
    //     const aStartsWith = a.name.toLowerCase().startsWith(searchLower);
    //     const bStartsWith = b.name.toLowerCase().startsWith(searchLower);
    //
    //     if (aStartsWith && !bStartsWith) return -1;
    //     if (!aStartsWith && bStartsWith) return 1;
    //     return 0;
    //   });
  };

  const debouncedSearch = useCallback(
    debounce((query) => {
      searchProducts(query);
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  const handleSuggestionClick = (suggestion) => {
    setSuggestions([]);
    setSearchQuery(suggestion);
    setSuggestions([]);
    handleSearch(suggestion);
  };

  const handleSearchClick = () => {
    setSuggestions([]);
    if (searchQuery === "") {
      navigate("/search");
      return;
    }

    handleSearch(searchQuery);
  };

  return (
    <div className="position-relative w-100 d-flex justify-content-center align-items-center">
      <div
        className={`searchInput d-flex justify-content-between align-items-center gap-4 border border-2 rounded-pill py-2 px-2 m-4 shadow-sm bg-white`}
      >
        <RiSearch2Line size={28} className="ms-2" />
        <input
          type="text"
          className="w-75 fs-5"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className={`py-${paddingY} px-4 px-md-5 searchBtn rounded-pill bg-success`}
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
      {/* Suggestion box alignment */}
      {suggestions.length > 0 && (
        <div className="suggestion-box bg-white text-start p-2">
          {suggestions.map((product, index) => (
            <div
              key={index}
              className="suggestion-item py-1 px-2 rounded-2"
              onClick={() => handleSuggestionClick(product.name)}
            >
              {product.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
