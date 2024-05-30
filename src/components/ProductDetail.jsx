import React from "react";
import { useGetProductByIdQuery } from "../features/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductByIdQuery(id) || {};

  if (error) {
    return <p>Something went wrong</p>;
  }
  if (isLoading) {
    return <Spinner className="mt-4" animation="border" />;
  }

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="container">
      <Breadcrumb className="mt-4">
        <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{data?.title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-start">{data?.title}</h1>
      <hr />

      <div className="product-detail">
        <div>
          <img
            src={data?.image}
            style={{ maxWidth: "300px", maxHeight: "300px" }}
            alt=""
          />
        </div>

        <div className="text-start">
          <h4>{data?.title}</h4>
          <h6 className="text-success">
            {data?.rating.count > 1 && "In Stock"}
          </h6>
          <h6>{data?.category}</h6>
          <p>{data?.description}</p>
          <h5>Price: ${data?.price}</h5>
          <div className="d-flex gap-2">
            <Button onClick={() => handleAddToCart(data)}>Add to Cart</Button>
          </div>
        </div>
      </div>

      {/* <hr /> */}
    </div>
  );
};

export default ProductDetail;
