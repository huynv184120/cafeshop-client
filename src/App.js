import './App.css';
import React from 'react';
import { getListProDuct } from './services/product';
import { useDispatch } from 'react-redux';
import { updateProduct } from './redux/actions/product';
import { Routes, Route } from 'react-router-dom';
import HomePage from './containers/Homepage';
import Signin from './containers/Signin';
import Signup from './containers/Signup';

const App = () => {
  const dispatch = useDispatch();
  getListProDuct().then(data => {
    dispatch(updateProduct(data))
  });
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>      
    </div>
  );
}

export default App;
