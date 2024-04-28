import { useContext } from 'react';
import { useState } from 'react';
import MyContext from '../Context/MyContext';
import Layout from '../Component/Layout';

function AddProduct() {
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
        <Layout>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-white p-8 rounded-xl shadow-2xl'>
                    <div className='form-group'>
                        <label htmlFor='name' className='block font-bold'>Product Name</label>
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
                        <label htmlFor='description' className='block font-bold'>Description</label>
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
                        <label htmlFor='img' className='block font-bold'>Image</label>
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
                        <label htmlFor='price' className='block font-bold'>Price</label>
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
                        <label htmlFor='isorganic' className='block font-bold'>Is Organic</label>
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
                        <label htmlFor='seller' className='block font-bold'>Seller</label>
                        <input
                            type='text'
                            name='seller'
                            value={seller}
                            placeholder='Enter seller name'
                            onChange={(e) => setSeller(e.target.value)}
                            className='input'
                        />
                    </div>

                    <button onClick={addProduct} className='bg-[#3f8c48] text-white py-2 px-4 rounded hover:bg-green-600 mt-4'>
                        Submit
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default AddProduct;
