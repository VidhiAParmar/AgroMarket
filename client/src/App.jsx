import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Sell from './Pages/Sell';

import Login from './Pages/Login';
import Register from './Pages/Register';
import MyState from "./Context/MyState";
import ProductInfo from "./Pages/ProductInfo";

function App() {
  return (
    <MyState>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/sell" element={<Sell/>}/> 
      <Route path="/productinfo/:id" element={<ProductInfo/>}/>
    </Routes>
    </BrowserRouter>
    </MyState>
  )
}

export default App

