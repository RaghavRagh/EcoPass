import "./SearchListing.css";
import Card from "../../components/Card/Card";
import products from "../../utils/products";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getProducts } from "../../api/api";

const ITEMS_PER_PAGE = 8; // Set the number of items to display per page

const SearchListing = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialSearchQuery = location.state?.query || "";
  const initialFilteredProducts =
    location.state?.filteredProducts || products.slice(0, ITEMS_PER_PAGE);

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [filteredProducts, setFilteredProducts] = useState(
    initialFilteredProducts
  );
  const [finalQuery, setFinalQuery] = useState(initialSearchQuery);
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

  useEffect(() => {
    if (location.state) {
      setFilteredProducts(
        location.state.filteredProducts || products.slice(0, ITEMS_PER_PAGE)
      );
      setFinalQuery(location.state.query || "");
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const handleSearch = async (query) => {
    if (!query.trim()) return;

    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery) {
      const results = await getProducts(trimmedQuery);
      
      // const results = products.filter((product) =>
      //   product.name.toLowerCase().includes(trimmedQuery)
      // );

      setFilteredProducts(results);
      setFinalQuery(trimmedQuery); // Set final query for display
      setCurrentPage(1); // Reset to first page on new search
    } else {
      setFilteredProducts(products.slice(0, ITEMS_PER_PAGE));
      setFinalQuery("");
      setCurrentPage(1); // Reset to first page when query is empty
    }
  };

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Get products to display for the current page
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="searchWrapper container-fluid">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          paddingY={2}
          clearSuggestions={true}
        />

        {finalQuery ? (
          <h2 className="display-6 fs-2 my-auto text-secondary">
            Showing{" "}
            <strong className="text-black">{filteredProducts.length}</strong>{" "}
            products for
            <strong className="text-black"> {finalQuery}</strong>
          </h2>
        ) : (
          <h2 className="display-6 fs-2 my-auto text-secondary">
            Showing{" "}
            <strong className="text-black">{filteredProducts.length}</strong>{" "}
            products
          </h2>
        )}

        <div className="custom-width border rounded-4 p-3 mb-5 mt-5 d-flex flex-column align-items-center bg-white">
          <div className="cardList w-100">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <div key={product.id}>
                  <Card
                    name={product.name}
                    image={product.image}
                    score={product.score}
                    category={product.category}
                    description={product.description}
                  />
                  <hr style={{ marginTop: 20, marginBottom: 20 }} />
                </div>
              ))
            ) : (
              <h2 className="text-center m-4">No products found!</h2>
            )}
          </div>

          <nav aria-label="Page navigation example" className="m-3">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  aria-label="Previous"
                  disabled={currentPage === 1}
                >
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  aria-label="Next"
                  disabled={currentPage === totalPages}
                >
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SearchListing;
