import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Context/MyContext";
import Layout from "../Component/Layout";
// import "./tailwind.css"; // Import Tailwind CSS

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
console.log(product);
  return (
    <div>
      <Layout>
        <div className="flex">
          <img src={product.imgURL} alt="Product" className="w-1/2 max-h-90 object-cover rounded-lg" />
          <div className="w-1/2 pl-8">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <h1 className="text-xl font-semibold mb-2">Price: {product.price}</h1>
            <h2 className="text-lg text-gray-700 mb-2">Description: {product.description}</h2>
            <h2 className="text-lg text-gray-700">Seller: {product.seller}</h2>
            {/* Render other product details here */}
          </div>
        </div>
      </Layout>
      </div>
  );
}

export default ProductInfo;
