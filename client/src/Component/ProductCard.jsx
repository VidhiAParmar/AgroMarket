import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MyContext from "../Context/MyContext";
import ProductInfo from "../Pages/ProductInfo";
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from "react-icons/ci";

const ProductCard = () => {
  const { products } = useContext(MyContext);
  const [isInWishlistLocal, setIsInWishlistLocal] = useState(false);
  const toggleWishlist = () => {
    // if (isInWishlistLocal) {
    //   removeFromWishlist(product.id);
    // } else {
    //   addToWishlist(product);
    // }
    setIsInWishlistLocal(!isInWishlistLocal);
  };
  return (
    <section className="text-[#3f8c48] body-font container px-5 py-8 md:py-16 mx-auto bg-[#ffffff]">
      <div className="flex flex-wrap -m-4">
        {products.length ? (
          products.map((item, index) => (
            <div
              key={index}
              className="p-4 md:w-1/4 drop-shadow-lg hover:scale-110 transition-scale-110 duration-300 ease-in-out"
            >
              <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-2xl overflow-hidden">
                <div className="flex justify-center cursor-pointer">
                  <img
                    className="rounded-2xl w-full h-96 p-2"
                    src={item.imgURL}
                    alt="blog"
                  />
                </div>
                <div className="p-5">
                  <h1 className="title-font text-lg font-medium text-[#3f8c48] mb-3">
                    {item.name}
                  </h1>
                  <h2>{item.price}</h2>
                  <h3>{item.isOrganic}</h3>
                  <h4>{item.seller}</h4>
                  {isInWishlistLocal ? (
                    <CiHeart onClick={toggleWishlist} />
                  ) : (
                    <FaHeart onClick={toggleWishlist} />
                  )}
                  <div className="flex justify-center">
                    <Link
                      to={`/productinfo/${item.id}`}
                      element={<ProductInfo />}
                      className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                    >
                      See Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>NO data</h1>
        )}
      </div>
    </section>
  );
};

export default ProductCard;
