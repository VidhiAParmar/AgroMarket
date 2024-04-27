import  { useState, useContext } from 'react';
import Layout from '../Component/Layout';
import MyContext from '../Context/MyContext';
import { Link } from 'react-router-dom';
function Sell() {
  let { products } = useContext(MyContext);
  const [product, setProduct] = useState(products);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState(0);
  const [isorganic, setIsorganic] = useState('');
  const [seller, setSeller] = useState('');

    const [available, setAvailable] = useState(true);
  
    const toggleAvailability = () => {
      setAvailable(!available);
    };
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
        <div className='container mx-auto flex justify-center h-40px'>
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

            <button onClick={addProduct} className='bg-[#3f8c48] text-white py-2  px-4 rounded hover:bg-opacity-75'>
              Submit
            </button>
          </div>
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
                                        <button className="focus:outline-none text-center text-white bg-[#3f8c48] hover:bg-[#98d0a2] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-1/3 py-2" onClick={toggleAvailability}>
                                         {available ? 'Not Available' : 'Available'}
                                         </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        
                            <h1>NO data</h1>
                        )}
                </div>
            </section>
      </Layout>
    </div>
  );

}
export default Sell;
