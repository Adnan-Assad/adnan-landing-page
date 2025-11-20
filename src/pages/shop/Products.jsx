import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../utils/products";

import btnIcon from "../../assets/button-icon.png";

const Products = ({ headLine }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectCategory, setSelectCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filterProducts = products.filter(
    (product) => product.category === selectCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="w-11/12 container mx-auto py-6 px-4">
        <h2 className="text-4xl font-bold text-center my-8">{headLine}</h2>
        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16 ">
          <div className="flex flex-col sm:flex-row items-center justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setSelectCategory(category);
                  setVisibleProducts(4);
                }}
                key={category}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-amber-500 hover:text-white transition-colors ${
                  selectCategory === category
                    ? "bg-white text-yellow-500"
                    : "text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* Products Grids */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
          {filterProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* load more button */}
        {visibleProducts < filterProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-base font-bold text-yellow-500 flex items-center gap-1"
            >
              View All
              <img src={btnIcon} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
