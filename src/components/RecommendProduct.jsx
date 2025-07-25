import React from "react";
import { products } from "../data/products";

const RecommendProduct = ({ currentProductId, addToCart }) => {
  // Filter out current product and pick first 3 others
  const recommended = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 3);

  return (
    <section className="w-full py-10 px-6 bg-off-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="font-heading text-3xl text-royal-blue font-bold">
          You Might Also Like
        </h2>
        <p className="text-gray-600 text-base mt-2">
          Similar items you may enjoy.
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recommended.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow p-4 text-center"
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-royal-blue font-bold text-xl mt-2">
              {product.price}
            </p>
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.images[0],
                })
              }
              className="mt-4 px-6 py-2 bg-royal-blue text-white rounded-full hover:bg-blue-700 transition"
            >
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendProduct;
