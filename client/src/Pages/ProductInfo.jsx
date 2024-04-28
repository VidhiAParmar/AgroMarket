import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Context/MyContext";
import Layout from "../Component/Layout";
import WishList from "./WishList";

function ProductInfo() {
  const { id: rawId } = useParams();
  const id = parseInt(rawId.replace(/\D/g, ''), 10); // Extract numeric part of id

  const { products } = useContext(MyContext);

  // Find the product with matching id
  const product = products.find(item => item.id === id);

  // Check if product is found, if not, display a message
  if (!product) {
    return <div>No product found with ID: {id}</div>;
  }

  return (
    <div>
      <Layout>
        <div className="flex bg-white overflow-hidden py-12">
          <div className="w-1/3 px-8">
            <img src={product.imgURL} alt="Product" className="w-full object-cover rounded-lg shadow-lg" />
          </div>
          <div className="w-2/3 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <h1 className="text-xl font-semibold mb-2">Price: {product.price}</h1>
            <h2 className="text-lg text-gray-700 mb-2">Description: {product.description}</h2>
            <h2 className="text-lg text-gray-700">Seller: {product.seller}</h2>
            {/* Render other product details here */}
            <div>
              <h1 className="text-xl font-semibold mb-2">Seller Details</h1>
              <h2 className="text-lg text-gray-700">Name: abcd</h2>
              <h2 className="text-lg text-gray-700">Phone number: 9988298765</h2>
              <h2 className="text-lg text-gray-700">City Name: Bhavnagar</h2>
              <h2 className="text-lg text-gray-700">Country Name: India</h2>
            </div> 
            <div className="flex justify-center">
              <Link to={`/wishlist`} element={<WishList />} className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/4 py-2">Add To WishList</Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ProductInfo;
