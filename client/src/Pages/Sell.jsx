import React, { useState, useContext } from 'react';
import Layout from '../Component/Layout';
import MyContext from '../Context/MyContext';
import { Link } from 'react-router-dom';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';

function Sell() {
    const { products, setProducts } = useContext(MyContext);
    const [available, setAvailable] = useState(true);

    const toggleAvailability = () => {
        setAvailable(!available);
    };

    const deleteProduct = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <div>
            <Layout>
                <div className="flex justify-center py-4">
                    <Link
                        to={'/addproduct'}
                        element={<AddProduct />}
                        className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/4 py-2"
                    >
                        + Add Product
                    </Link>
                </div>

                <section className="text-[#3f8c48] body-font container px-5 py-8 md:py-16 mx-auto bg-[#ffffff]">
                    <div className="flex flex-wrap -m-4">
                        {products.length ? (
                            products.map((item, index) => (
                                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg hover:scale-110 transition-scale-110 duration-300 ease-in-out">
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded-2xl overflow-hidden">
                                        <div className="flex justify-center cursor-pointer">
                                            <img className="rounded-2xl w-full h-96 p-2" src={item.imgURL} alt="blog" />
                                        </div>
                                        <div className="p-5">
                                            <h1 className="title-font text-lg font-medium text-[#3f8c48] mb-3">{item.name}</h1>
                                            <h2>{item.price}</h2>
                                            <h3>{item.isOrganic}</h3>
                                            <button className="focus:outline-none text-center text-[#3f8c48] bg-[#f2f2ee] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/3 py-2" onClick={toggleAvailability}>
                                                {available ? 'Not Available' : 'Available'}
                                            </button>
                                            <div className="flex justify-between py-2"> {/* Updated container */}
                                                <Link to={`/updateproduct/${item.id}`} element={<UpdateProduct />} className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/2 py-2" >
                                                    Update
                                                </Link>
                                                <button className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/2 py-2" onClick={() => deleteProduct(item.id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h1>No data</h1>
                        )}
                    </div>
                </section>
            </Layout>
        </div>
    );
}

export default Sell;
