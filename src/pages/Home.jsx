import React from "react";
import ProductSlider from "../components/slider/ProductSlider";
import Category from "../components/category/Category";
import ProductList from "./ProductList";


const Home = () => {
  return (
    <div>
      <ProductSlider />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
