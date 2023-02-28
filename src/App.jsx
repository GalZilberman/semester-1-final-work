import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import CartList from './Cart/CartList';
import Home from './Home';
import LogIn from './LogIn';
import AddItem from './Management/AddItem';
import Management from './Management/Management';
import RemoveItem from './Management/RemoveItem';
import HatsList from './Products/HatsList';
import SweatpantsList from './Products/SweatpantsList';
import Tshirtlist from './Products/Tshirtlist';
import Register from './Register';




function App() {
  return (
    <div className="App App-header">

      <div className='linkList'>
        <Link className='link' style={{background:"#A52A2A"}} to="/">Home</Link>
        <Link className='link' to="/TshirtList">T-shirt</Link>
        <Link className='link' to="/SweatpantsList">Sweatpants</Link>
        <Link className='link' to="/HatsList">Hats</Link>
        <Link className='link' to="/cartList">Cart</Link>
        <Link className='link' to="/login">Log in</Link>
        <Link className='link' to="/register">Register</Link>
      </div>

    
      

      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/TshirtList' element={<Tshirtlist/>} />
          <Route path='/SweatpantsList' element={<SweatpantsList/>} />
          <Route path='/hatsList' element={<HatsList/>} />
          <Route path='/cartList' element={<CartList/>} />
          <Route path='/login' element={<LogIn/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/management' element={<Management/>} />
          <Route path='/addItem' element={<AddItem/>} />
          <Route path='/removeItem' element={<RemoveItem/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
