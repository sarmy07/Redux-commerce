import React, { useState } from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { Container } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSearchedProduct } from "../features/filterSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const ProductList = () => {
  const [showSearch, setShowSearch] = useState(false);

  const { data, error, isLoading, isFetching } = useGetAllProductsQuery();
  const { searchedProduct, category } = useSelector(
    (state) => state.productFilter
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let productsData;

  const categories = [
    {
      value: "all",
      name: "Find Product By Category",
    },
    {
      value: "jewelery",
      name: "Jewelery",
    },
    {
      value: "electronics",
      name: "Electronics",
    },
    {
      value: "men's clothing",
      name: "Men's Clothing",
    },
    {
      value: "women's clothing",
      name: "Women's Clothing",
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (searchedProduct) {
    productsData = data?.filter((item) =>
      item.title.toLowerCase().includes(searchedProduct.toLowerCase())
    );
  } else if (category.length > 0) {
    if (category.toLowerCase() === "all") {
      productsData = data;
    } else {
      productsData = data?.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  } else {
    productsData = data;
  }

  return (
    <>
      <Container>
        <div className="mt-5 text-start">
          <div className="collection">
            <h3>Shop by Collection</h3>
            <p>
              Each season, we collaborate with world class designers to create a
              collection inspired by natural world.
            </p>
          </div>

          <div className="mb-2 search-bar">
            <div>
              {showSearch && (
                <input
                  type="text"
                  value={searchedProduct}
                  className="border-2  px-2 py-1 rounded mx-2"
                  placeholder="Search Product"
                  onChange={(e) => dispatch(setSearchedProduct(e.target.value))}
                />
              )}
            </div>

            <BiSearch
              size={25}
              style={{ cursor: "pointer" }}
              className="search-logo"
              onClick={(e) => setShowSearch(!showSearch)}
            />
          </div>
        </div>

        <div className="category-selector drop-down">
          <select
            value={category}
            className="p-2 rounded border w-25"
            onChange={(e) => dispatch(setCategory(e.target.value))}
          >
            {categories.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {error && <p>Something went wrong...try again!</p>}
        {isLoading && <Spinner className="mt-4" animation="border" />}
        {isFetching && <p>Fetching data...</p>}

        <div className="products">
          {productsData?.map((product) => {
            return (
              <Card
                style={{ marginBottom: "10px" }}
                key={product.id}
                className=" mt-4 product"
              >
                <div className="text-center mt-4">
                  <Card.Img
                    onClick={() => navigate(`/products/${product?.id}`)}
                    variant="top"
                    src={product.image}
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white">
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>
                </Card.Footer>
              </Card>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default ProductList;
