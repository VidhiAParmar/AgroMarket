import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyContext from '../Context/MyContext';
import Layout from '../Component/Layout';

function UpdateProduct() {
    const { id: rawId } = useParams();
    const id = parseInt(rawId.replace(/\D/g, ''), 10); // Extract numeric part of id

    const { products, updateProduct } = useContext(MyContext);

    // Find the product with matching id
    const product = products.find(item => item.id === id);

    // Check if product is found, if not, display a message
    if (!product) {
        return <div>No product found with ID: {id}</div>;
    }

    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [seller, setSeller] = useState(product.seller);
    const [image, setImage] = useState(product.imgURL);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSellerChange = (e) => {
        setSeller(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        // Call updateProduct function with the updated product data
        updateProduct(id, {
            name: name,
            price: price,
            description: description,
            seller: seller,
            imgURL: image
        });
    };

    return (
        <Layout>
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/2">
                        <img src={image} alt="Product" className="max-w-full max-h-40 object-cover rounded-lg" />
                        <input
                            type="file"
                            onChange={handleImageChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="w-1/2 pl-4">
                        <h1 className="text-3xl font-bold mb-2">Update Product</h1>
                        <input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            className="text-lg mb-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                            placeholder="Name"
                        />
                        <input
                            type="number"
                            value={price}
                            onChange={handlePriceChange}
                            className="text-lg mb-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                            placeholder="Price"
                        />
                        <input
                            type="text"
                            value={description}
                            onChange={handleDescriptionChange}
                            className="text-lg mb-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                            placeholder="Description"
                        />
                        <input
                            type="text"
                            value={seller}
                            onChange={handleSellerChange}
                            className="text-lg mb-2 w-full rounded-lg border border-gray-300 px-3 py-2"
                            placeholder="Seller"
                        />
                        <button onClick={handleSave} className="bg-[#3f8c48] text-white py-2 px-4 rounded hover:bg-green-600 mt-2">Save</button>
                    </div>
                </div>
                {/* Render other product details here */}
            </div>
        </div>
        </Layout>
    );
}

export default UpdateProduct;
