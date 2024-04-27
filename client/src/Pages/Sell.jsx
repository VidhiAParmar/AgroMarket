import React, { useState, useContext } from 'react';
import Layout from '../Component/Layout';
import MyContext from '../Context/MyContext';

function Sell() {
  let { products } = useContext(MyContext);
  const [product, setProduct] = useState(products);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  const [isorganic, setIsorganic] = useState('');
  const [seller, setSeller] = useState('');

  const addProduct = () => {
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      description: description,
      img: img,
      price: price,
      isorganic: isorganic,
      seller: seller
    };

    setProduct([newProduct, ...product]);
    setName('');
    setDescription('');
    setImg('');
    setPrice(0);
    setIsorganic('');
    setSeller('');
    products = product;
  };

  return (
    <div>
      <Layout>
        <div className='container mx-auto flex justify-center items-center h-screen'>
          <div className='form-container bg-white p-8 rounded-lg shadow-md'>
            <h2 className='text-2xl bg-[#3f8c48] text-[#ffff] p-2 rounded-lg font-bold text-center mb-6'>Add Product</h2>
            <div className='form-group'>
              <label htmlFor='name'>Product Name</label>
              <input
                type='text'
                name='name'
                value={name}
                placeholder='Enter title'
                onChange={(e) => setName(e.target.value)}
                className='input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <input
                type='text'
                name='description'
                value={description}
                placeholder='Enter description'
                onChange={(e) => setDescription(e.target.value)}
                className='input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='img'>Image</label>
              <input
                type='text'
                name='img'
                value={img}
                placeholder='Enter image URL'
                onChange={(e) => setImg(e.target.value)}
                className='input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='price'>Price</label>
              <input
                type='number'
                name='price'
                value={price}
                placeholder='Enter price'
                onChange={(e) => setPrice(e.target.value)}
                className='input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='isorganic'>Is Organic</label>
              <input
                type='text'
                name='isorganic'
                value={isorganic}
                placeholder='Enter true or false'
                onChange={(e) => setIsorganic(e.target.value)}
                className='input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='seller'>Seller</label>
              <input
                type='text'
                name='seller'
                value={seller}
                placeholder='Enter seller name'
                onChange={(e) => setSeller(e.target.value)}
                className='input'
              />
            </div>

            <button onClick={addProduct} className='bg-3f8c48 text-white py-2 px-4 rounded hover:bg-opacity-75'>
              Submit
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Sell;
