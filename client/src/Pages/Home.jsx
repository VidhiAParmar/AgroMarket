import Layout from '../Component/Layout';
import Poster from "../../public/poster.jpeg"
import ProductCard from '../Component/ProductCard';
//import axios from 'axios';
//import { useContext } from 'react';
// import myContext from '../context/myContext';

const Home = () => {
    return (
       
        <div>
             <Layout>
            <div className='poster'>
                <img  className="w-full h-50 object-cover rounded-lg" src={Poster} alt='kguh'/>
            </div>
            <ProductCard/>
            </Layout>
        </div>
     
    );
}

export default Home;
