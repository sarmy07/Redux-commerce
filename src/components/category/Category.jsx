import React from "react";
import cat1 from "./images/cat1.webp";
import cat2 from "./images/cat2.webp";
import cat3 from "./images/cat3.webp";
import cat4 from "./images/cat4.webp";

const category = () => {
  const categories = [
    {
      img: cat1,
      name: "electronics",
      id: 1,
    },
    {
      img: cat2,
      name: "jewelery",
      id: 2,
    },
    {
      img: cat3,
      name: "men's clothing",
      id: 3,
    },
    {
      img: cat4,
      name: "women's clothing",
      id: 4,
    },
  ];
  return (
    <div className="pt-5 container">
      <h3 className="py-2  category-head">Shop By Category</h3>
      <div className="category-card">
        {categories.map((category) => {
          return (
            <div key={category.id} className="category-section">
              <div
                className="category"
                style={{
                  background: `linear-gradient(rgba(20,20,20, 0.3),rgba(20,20,20, .3)), url(${category.img}) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h5 className="text-white px-3">{category.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default category;
