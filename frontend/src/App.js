import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route ,Link} from 'react-router-dom';
import Shop from './Components/pages/Shop';
import Product from './Components/pages/Product';
import ShopCategory from './Components/pages/ShopCategory';
import LoginSignup from './Components/pages/LoginSignup';
import Cart from './Components/pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/men' element={<ShopCategory/>} category="men" />
      <Route path='/women' element={<ShopCategory/>} category="women" />
      <Route path='/kids' element={<ShopCategory/>} category="kids" />
      <Route path='/products' element={<Product />} />
      <Route path='/:productsId' element={<Product />} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/LoginSignup' element={<LoginSignup />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
